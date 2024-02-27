import {configureStore} from "@reduxjs/toolkit";
import cvInfoReducer from "./cvInfo/cvInfoSlice";

export const store = configureStore({
    reducer: {
        cvInfo: cvInfoReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;