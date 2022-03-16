import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/category/categorySlice";
import seriesReducer from './features/serie/serieSlice'

export const store = configureStore({
    reducer: {
        series: seriesReducer,
        categories: categoriesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;