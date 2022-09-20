import { configureStore } from "@reduxjs/toolkit";
import isCartOpenReducer from './isCartOpen/reducer';
import cartReducer from './cart/reducer'

export const store = configureStore({
    reducer: {
        cartOpen: isCartOpenReducer,
        cart: cartReducer,
    }
})