import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import style from "./Goods.module.scss";

export const Goods = () => (
  <section className={style.goods}>
    <Container className={style.goods}>
      <h1 className={`${style.title} hidden`}>Список товаров</h1>
      <ul className={style.list}>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
      </ul>
    </Container>
  </section>
);
