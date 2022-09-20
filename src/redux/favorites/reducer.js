import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        itemsInFavorites: []
    },
    reducers: {
        setItemInFavorites: (state, action) => {
            state.itemsInFavorites.push(action.payload)
        },
        deleteItemInFavorites: (state, action) => {
            state.itemsInFavorites = state.itemsInFavorites.filter(product => product.id !== action.payload)
        }
    }
})

export const { setItemInFavorites, deleteItemInFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer