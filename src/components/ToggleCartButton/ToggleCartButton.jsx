import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/cart/cartSlice";

export const ToggleCartButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const isCarted = products?.find((item) => item.id === id);

  const handleCartButtonClick = () => {
    if (!isCarted) {
      dispatch(
        addProductToCart({
          productId: id,
          quantity: 1,
        }),
      );
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  return (
    <button
      className={className}
      aria-label="Кнопка добавления в корзину"
      onClick={() => {
        handleCartButtonClick();
      }}>
      {isCarted ? "Убрать" : "В корзину"}
    </button>
  );
};
