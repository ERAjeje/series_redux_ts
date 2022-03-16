import { createSlice } from "@reduxjs/toolkit"


export interface Category {
    title: String
};

export interface Categories {
    categories: Category[]
}

const initialState: Categories = {
    categories: []
}

export const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, { payload }) => ({
            ...state,
            categories: [...state.categories, payload.data]
        })
    }
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;