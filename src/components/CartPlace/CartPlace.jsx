import style from "./CartPlace.module.scss";

export const CartPlace = ({ totalCount, totalPrice }) => {
  return (
    <div className={style.place}>
      <h2 className={style.subtitle}>Оформление</h2>
      <div className={style.placeInfo}>
        <p>
          {totalCount}
          {totalCount === 1
            ? " товар "
            : totalCount > 1 && totalCount < 5
              ? " товара "
              : " товаров "}
          на сумму:
        </p>
        <p>{totalPrice?.toLocaleString()}&nbsp;₽</p>
      </div>
      <p className={style.placeDelivery}>Доставка 0 ₽</p>
      <button className={style.placeBtn}>Оформить заказ</button>
    </div>
  );
};
