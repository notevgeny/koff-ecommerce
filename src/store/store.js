import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import categoriesReducer from "./categories/categoriesSlice.js";
import goodsReducer from "./goods/goodsSlice.js";
import productReducer from "./product/productSlice.js";
import favoriteReducer from "./favorite/favoriteSlice.js";
import cartReducer from "./cart/cartSlice.js";
import formCartReducer from "./formCart/formCartSlice.js";
import orderReducer from "./order/orderSlice.js";
import { apiTokenErrorMiddleware } from "./middleware.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
    formCart: formCartReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
