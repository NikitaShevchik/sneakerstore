import { createSlice } from '@reduxjs/toolkit';

const isCartOpenSlice = createSlice({
    name: 'isCartOpen',
    initialState: {
        isCartOpen: false
    },
    reducers: {
        setIsCartOpen: (state, action) => {
            state.isCartOpen = !state.isCartOpen
        }
    }
});

export const { setIsCartOpen } = isCartOpenSlice.actions;

export default isCartOpenSlice.reducer;