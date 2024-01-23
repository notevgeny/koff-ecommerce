import { API_URL } from "../../const";
import style from "./CartGoods.module.scss";

export const CartGoods = ({ products }) => {
  return (
    <ul className={style.goods}>
      {products.map((item) => (
        <li key={item.productId} className={style.product}>
          <img
            src={`${API_URL}${item.images[0]}`}
            alt={item.name}
            className={style.img}
          />
          <h3 className={style.titleProduct}>{item.name}</h3>
          <p className={style.price}>{item.price?.toLocaleString()}&nbsp;₽</p>
          <p className={style.article}>арт. {item.article}</p>
          <div className={style.productControl}>
            <button className={style.productBtn}>-</button>
            <p className={style.productCount}>{item.quantity}</p>
            <button className={style.productBtn}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
