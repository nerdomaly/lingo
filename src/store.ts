import { configureStore } from "@reduxjs/toolkit";
import solutionReducer from "./slices/solutionSlice";
import gameStatusReducer from "./slices/gameStatusSlice";
import { FIVE_LETTER_WORDS } from "./constants/five-letter-words";
import { getRandomNumber } from "./utils";

const getInitialSolution = () => {
    const solutionSet = FIVE_LETTER_WORDS.filter((x) => x.solution === 1).map(
        (x) => x.word
    );
    return solutionSet[getRandomNumber(solutionSet.length)].toUpperCase();
};

const initialSolution = getInitialSolution();

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    console.log(`Initial solution: ${initialSolution}`);
}

export const store = configureStore({
    reducer: {
        solution: solutionReducer,
        gameStatus: gameStatusReducer,
    },
    preloadedState: {
        solution: {
            value: initialSolution,
        },
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
