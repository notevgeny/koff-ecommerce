import style from "../../views/Header/Header.module.scss";

import LikeSVG from "../../assets/heart.svg?react";
import CartSVG from "../../assets/cart.svg?react";

export const Control = () => (
  <ul className={style.control}>
    <li className={style.controlItem}>
      <a
        href="/favorite"
        className={style.controlLink}
        aria-label="Добавить в избранное">
        <span className={style.controlLinkText}>Избранное</span>
        <LikeSVG />
      </a>
    </li>
    <li className={style.controlItem}>
      <a
        href="/cart"
        className={style.controlLink}
        aria-label="Добавить в корзину">
        <span className={style.controlLinkText}>Корзина (5)</span>
        <CartSVG />
      </a>
    </li>
  </ul>
);
