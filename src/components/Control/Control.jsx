import { Link } from "react-router-dom";
import LikeSVG from "../../assets/heart.svg?react";
import CartSVG from "../../assets/cart.svg?react";

import style from "../../views/Header/Header.module.scss";
import { useSelector } from "react-redux";

export const Control = () => {
  const { favoriteList } = useSelector((state) => state.favorite);
  const { products } = useSelector((state) => state.cart);

  return (
    <ul className={style.control}>
      <li className={style.controlItem}>
        <Link
          to="/favorite"
          className={style.controlLink}
          aria-label="Добавить в избранное">
          <span className={style.controlLinkText}>
            Избранное {favoriteList.length ? `(${favoriteList.length})` : ""}
          </span>
          <LikeSVG />
        </Link>
      </li>
      <li className={style.controlItem}>
        <Link
          to="/cart"
          className={style.controlLink}
          aria-label="Добавить в корзину">
          <span className={style.controlLinkText}>
            Корзина {products.length ? `(${products.length})` : ""}
          </span>
          <CartSVG />
        </Link>
      </li>
    </ul>
  );
};
