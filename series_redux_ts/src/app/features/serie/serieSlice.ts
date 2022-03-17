import { createSlice } from "@reduxjs/toolkit"
import { Category } from "../category/categorySlice"

export interface Serie {
    title: String,
    watched: boolean,
    categories: Category[]
};

export interface Series {
    series: Serie[]
}

const initialState: Series = {
    series: [
        {
            title: 'Game of Thrones',
            watched: true,
            categories: []
        },
        {
            title: 'Superman',
            watched: false,
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
        }),
        changeSerie: (state, { payload }) => {
            const index = state.series.findIndex(item => item.title === payload.title);
            state.series[index].watched = payload.value;
        }
    }
})

export const { addSerie, changeSerie } = seriesSlice.actions;
export default seriesSlice.reducer;