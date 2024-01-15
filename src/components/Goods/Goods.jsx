import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import style from "./Goods.module.scss";

export const Goods = ({ goods }) => (
  <section className={style.goods}>
    <Container className={style.goods}>
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
