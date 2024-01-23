import style from "./CartGoods.module.scss";

export const CartGoods = () => {
  return (
    <ul className={style.goods}>
      <li className={style.product}>
        <img
          src="https://koff-api.vercel.app/img//1hb3g24plh60ema3.jpg"
          alt="Диван-кровать ИТАЛИЯ Muse Confortplus"
          className={style.img}
        />
        <h3 className={style.titleProduct}>
          Диван-кровать ИТАЛИЯ Muse Confortplus
        </h3>
        <p className={style.price}>281&nbsp;170&nbsp;₽</p>
        <p className={style.article}>арт. 16955200638</p>
        <div className={style.productControl}>
          <button className={style.productBtn}>-</button>
          <p className={style.productCount}>3</p>
          <button className={style.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};
