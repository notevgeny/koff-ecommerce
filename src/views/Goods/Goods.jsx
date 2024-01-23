import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import style from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../store/goods/goodsSlice";
import { useSearchParams } from "react-router-dom";

export const Goods = ({ title }) => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const q = searchParam.get("q");
  // const { pagination } = useSelector((state) => state.goods);

  const {
    goods,
    loading: loadingGoods,
    error: errorGoods,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    if (location.pathname !== "/favorite") {
      dispatch(fetchGoods({ category, q }));
    }
  }, [dispatch, category, q]);

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
        {title ? (
          <h1 className={`${style.title}`}>{title}</h1>
        ) : (
          <h1 className={`${style.title} hidden`}>Список товаров</h1>
        )}

        {goods.length ? (
          <ul className={style.list}>
            {goods.map((good) => (
              <li className={style.itemList} key={good.id}>
                <CardItem good={good} />
              </li>
            ))}
          </ul>
        ) : (
          <p>По вашему запросу товаров не найдено</p>
        )}
      </Container>
    </section>
  );
};
