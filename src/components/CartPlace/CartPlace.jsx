import style from "./CartPlace.module.scss";
import { declOfNum } from "../../helpers/declOfNum";

export const CartPlace = ({ totalCount, totalPrice }) => {
  return (
    <div className={style.place}>
      <h2 className={style.subtitle}>Оформление</h2>
      <div className={style.placeInfo}>
        <p>
          {totalCount}
          {declOfNum(totalCount, [" товар ", " товара ", " товаров "])}
          на сумму:
        </p>
        <p>{totalPrice?.toLocaleString()}&nbsp;₽</p>
      </div>
      <p className={style.placeDelivery}>Доставка 0 ₽</p>
      <button className={style.placeBtn}>Оформить заказ</button>
    </div>
  );
};
