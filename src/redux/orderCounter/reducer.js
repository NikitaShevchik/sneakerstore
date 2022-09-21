import { createSlice } from '@reduxjs/toolkit';

const orderCounterSlice = createSlice({
    name: 'orederCounter',
    initialState: {
        orderCounter: 0,
        orderDone: false,
    },
    reducers: {
        setOrderDone: (state, action) => {
            state.orderDone = !state.orderDone
        },
        setOrderCounter: (state, action) => {
            state.orderCounter = state.orderCounter + 1
        }
    }
});

export const { setOrderDone, setOrderCounter } = orderCounterSlice.actions;

export default orderCounterSlice.reducer;