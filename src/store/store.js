import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import categoriesReducer from "./categories/categoriesSlice.js";
import goodsReducer from "./goods/goodsSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsReducer,
  },
});
