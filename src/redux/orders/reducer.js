import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orderItems: []
    },
    reducers: {
        setItemsInOrder: (state, action) => {
            state.orderItems.push(action.payload)
        }
    }
})

export const { setItemsInOrder } = ordersSlice.actions;

export default ordersSlice.reducer