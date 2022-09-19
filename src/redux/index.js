import { configureStore } from "@reduxjs/toolkit";
import isCartOpenReducer from './isCartOpen/reducer'

export const store = configureStore({
    reducer: {
        cartOpen: isCartOpenReducer,
    }
})