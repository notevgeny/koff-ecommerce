import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import style from "./Goods.module.scss";

export const Goods = () => (
  <section>
    <Container className={style.goods}>
      <h1 className={`${style.title} visually-hidden}`}>Список товаров</h1>
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
