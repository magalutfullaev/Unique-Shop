import {configureStore } from "@reduxjs/toolkit";
import appSlice from './slice/appSlice';

export const store = configureStore({
    reducer: {
        appSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>;

