import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface SolutionState {
    value: string;
}

// Define the initial state using that type
const initialState: SolutionState = {
    value: "",
};

export const solutionSlice = createSlice({
    name: "solution",
    initialState,
    reducers: {
        setSolution: (state, action: PayloadAction<string>) => {
            console.log(`setSolution: ${action.payload}`);
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSolution } = solutionSlice.actions;

export const selectSolution = (state: RootState) => state.solution.value;

export default solutionSlice.reducer;
