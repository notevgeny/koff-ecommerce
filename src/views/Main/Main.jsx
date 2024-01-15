import { useDispatch, useSelector } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categoriesSlice";
import { Container } from "../Container/Container";

import style from "./Main.module.scss";
import { fetchGoods } from "../../store/goods/goodsSlice";

// const data = [];

export const Main = () => {
  const dispatch = useDispatch();
  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const {
    goods,
    loading: loadingGoods,
    error: errorGoods,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <main>
      {loadingCategories && (
        <Container className={style.container}>
          <div>Загрузка...</div>
        </Container>
      )}
      {errorCategories ? (
        <Container className={style.container}>
          <div>Произошла ошибка: {errorCategories}</div>
        </Container>
      ) : (
        <Catalog categories={categories} />
      )}

      {loadingGoods && (
        <Container className={style.container}>
          <div>Загрузка товаров...</div>
        </Container>
      )}

      {errorGoods ? (
        <Container className={style.container}>
          <div>Произошла ошибка: {errorCategories}</div>
        </Container>
      ) : (
        <Goods goods={goods} />
      )}
    </main>
  );
};
