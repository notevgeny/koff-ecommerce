import { useDispatch, useSelector } from "react-redux";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartGoods } from "../../components/CartGoods/CartGoods";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { Container } from "../Container/Container";
import style from "./Cart.module.scss";
import { useEffect } from "react";
import { fetchCart } from "../../store/cart/cartSlice";
import { useLocation } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { products, loadingFetch, totalPrice, totalCount } = useSelector(
    (state) => state.cart,
  );

  useEffect(() => {
    if (pathname === "/cart") {
      dispatch(fetchCart());
    }
  }, [dispatch, pathname]);

  return (
    <section className={style.cart}>
      <Container className={style.container}>
        <h1 className={style.title}>Корзина</h1>
        <CartGoods products={products} />
        <CartPlace totalCount={totalCount} totalPrice={totalPrice} />
        <CartForm />
      </Container>
    </section>
  );
};
