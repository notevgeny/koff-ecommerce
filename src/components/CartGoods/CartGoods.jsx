import { useDispatch } from "react-redux";
import { API_URL } from "../../const";
import style from "./CartGoods.module.scss";
import {
  removeProductFromCart,
  updateProductToCart,
} from "../../store/cart/cartSlice";

export const CartGoods = ({ products }) => {
  const dispatch = useDispatch();

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(
        updateProductToCart({
          productId: id,
          quantity: quantity - 1,
        }),
      );
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  const handlePlus = (id, quantity) => {
    dispatch(
      updateProductToCart({
        productId: id,
        quantity: quantity + 1,
      }),
    );
  };

  return (
    <ul className={style.goods}>
      {products.map((item) => (
        <li key={item.id} className={style.product}>
          <img
            src={`${API_URL}${item.images[0]}`}
            alt={item.name}
            className={style.img}
          />
          <h3 className={style.titleProduct}>{item.name}</h3>
          <p className={style.price}>
            {(item.price * item.quantity)?.toLocaleString()}&nbsp;₽
          </p>
          <p className={style.article}>арт. {item.article}</p>
          <div className={style.productControl}>
            <button
              className={style.productBtn}
              onClick={() => handleMinus(item.id, item.quantity)}>
              -
            </button>
            <p className={style.productCount}>{item.quantity}</p>
            <button
              className={style.productBtn}
              onClick={() => handlePlus(item.id, item.quantity)}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
