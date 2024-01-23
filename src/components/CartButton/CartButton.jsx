import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart/cartSlice";
import { useState } from "react";

export const CartButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [isAtCart, setIsAtCart] = useState(false);

  const isCarted = products?.includes(id);

  const handleCartButtonClick = () => {};

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
