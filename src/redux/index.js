import { configureStore } from "@reduxjs/toolkit";
import isCartOpenReducer from './isCartOpen/reducer';
import cartReducer from './cart/reducer';
import favoritesReducer from './favorites/reducer'
import ordersReducer from './orders/reducer'
import ordersCounterReducer from './orderCounter/reducer'

export const store = configureStore({
    reducer: {
        cartOpen: isCartOpenReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        orders: ordersReducer,
        ordersCounter: ordersCounterReducer,
    }
})