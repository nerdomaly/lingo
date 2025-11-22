import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FIVE_LETTER_WORDS } from "../constants/five-letter-words";
import { getRandomNumber } from "../utils";

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
            state.value = action.payload;
        },
        resetSolution: (state) => {
            const solutionSet = FIVE_LETTER_WORDS.filter((x) => x.solution === 1).map(
                (x) => x.word
            );
            const newSolution = solutionSet[getRandomNumber(solutionSet.length)].toUpperCase();
            if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                console.log(`New solution: ${newSolution}`);
            }
            state.value = newSolution;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setSolution, resetSolution } = solutionSlice.actions;

export const selectSolution = (state: RootState) => state.solution.value;

export default solutionSlice.reducer;
