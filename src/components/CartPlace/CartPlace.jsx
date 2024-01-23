import style from "./CartPlace.module.scss";

export const CartPlace = () => {
  return (
    <div className={style.place}>
      <h2 className={style.subtitle}>Оформление</h2>
      <div className={style.placeInfo}>
        <p>4 товара на сумму:</p>
        <p>20 000 ₽</p>
      </div>
      <p className={style.placeDelivery}>Доставка 0 ₽</p>
      <button className={style.placeBtn}>Оформить заказ</button>
    </div>
  );
};
