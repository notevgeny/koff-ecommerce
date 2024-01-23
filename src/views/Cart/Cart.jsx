import { CartForm } from "../../components/CartForm/CartForm";
import { CartGoods } from "../../components/CartGoods/CartGoods";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { Container } from "../Container/Container";
import style from "./Cart.module.scss";

export const Cart = () => {
  return (
    <section className={style.cart}>
      <Container className={style.container}>
        <h1 className={style.title}>Корзина</h1>
        <CartGoods />
        <CartPlace />
        <CartForm />
      </Container>
    </section>
  );
};
