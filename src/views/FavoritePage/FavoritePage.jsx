import { Header } from "../Header/Header";
import { Catalog } from "../Catalog/Catalog";
import { Goods } from "../Goods/Goods";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../store/goods/goodsSlice";
import style from "../Goods/Goods.module.scss";
import { Container } from "../Container/Container";
import { useLocation, useSearchParams } from "react-router-dom";

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state.favorite);
  const { pathname } = useLocation();

  const [searchParam] = useSearchParams();
  const page = searchParam.get("page");

  useEffect(() => {
    if (pathname === "/favorite") {
      if (favoriteList) {
        dispatch(fetchGoods({ list: favoriteList.join(","), page }));
      }
    }
  }, [dispatch, favoriteList, pathname, page]);

  return (
    <>
      <Header />
      <main>
        <Catalog />
        {favoriteList?.length ? (
          <>
            <Goods title="Избранное" />
          </>
        ) : (
          <Container>
            <h1 className={`${style.title}`} style={{ "margin-top": "20px" }}>
              В избранном нет товаров
            </h1>
          </Container>
        )}
      </main>
      <Footer />
    </>
  );
};
