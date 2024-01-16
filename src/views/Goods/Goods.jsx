import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import style from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../store/goods/goodsSlice";

export const Goods = () => {
  const dispatch = useDispatch();

  const {
    goods,
    loading: loadingGoods,
    error: errorGoods,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  if (loadingGoods)
    return (
      <Container>
        <div>Загрузка товаров...</div>
      </Container>
    );

  if (errorGoods)
    return (
      <Container>
        <div>Произошла ошибка: {errorGoods}</div>
      </Container>
    );

  return (
    <section className={style.goods}>
      <Container>
        <h1 className={`${style.title} hidden`}>Список товаров</h1>
        <ul className={style.list}>
          {goods.map((good) => (
            <li className={style.itemList} key={good.id}>
              <CardItem good={good} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
