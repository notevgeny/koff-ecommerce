import { Link } from "react-router-dom";
import LikeSVG from "../../assets/heart.svg?react";
import CartSVG from "../../assets/cart.svg?react";

import style from "../../views/Header/Header.module.scss";

export const Control = () => (
  <ul className={style.control}>
    <li className={style.controlItem}>
      <Link
        to="/favorite"
        className={style.controlLink}
        aria-label="Добавить в избранное">
        <span className={style.controlLinkText}>Избранное</span>
        <LikeSVG />
      </Link>
    </li>
    <li className={style.controlItem}>
      <Link
        to="/cart"
        className={style.controlLink}
        aria-label="Добавить в корзину">
        <span className={style.controlLinkText}>Корзина (5)</span>
        <CartSVG />
      </Link>
    </li>
  </ul>
);
