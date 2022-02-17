import { configureStore } from "@reduxjs/toolkit";
import solutionReducer from "./slices/solutionSlice";

export const store = configureStore({
    reducer: { solution: solutionReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
