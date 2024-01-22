import { Header } from "../Header/Header";
import { Catalog } from "../Catalog/Catalog";
import { Goods } from "../Goods/Goods";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../store/goods/goodsSlice";
import style from "../Goods/Goods.module.scss";
import { Container } from "../Container/Container";
import { useLocation } from "react-router-dom";

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state.favorite);
  console.log(useLocation());

  useEffect(() => {
    if (favoriteList) {
      dispatch(fetchGoods({ list: favoriteList.join(",") }));
    }
  }, [dispatch, favoriteList]);

  return (
    <>
      <Header />
      <main>
        <Catalog />
        {favoriteList?.length ? (
          <Goods title="Избранное" />
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
