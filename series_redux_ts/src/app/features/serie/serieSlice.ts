import { createSlice } from "@reduxjs/toolkit"
import { Category } from "../category/categorySlice"

export interface Serie {
    title: String,
    whatched: boolean,
    categories: Category[]
};

export interface Series {
    series: Serie[]
}

const initialState: Series = {
    series: [
        {
            title: 'Game of Thrones',
            whatched: true,
            categories: []
        },
        {
            title: 'Superman',
            whatched: false,
            categories: []
        }
    ]
}

export const seriesSlice = createSlice({
    name: 'serie',
    initialState,
    reducers: {
        addSerie: (state, { payload }) => ({
            ...state,
            series: [...state.series, payload.data]
        })
    }
})

export const { addSerie } = seriesSlice.actions;
export default seriesSlice.reducer;