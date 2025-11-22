import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type GameStatus = "playing" | "won" | "lost";

interface GameStatusState {
    value: GameStatus;
}

const initialState: GameStatusState = {
    value: "playing",
};

export const gameStatusSlice = createSlice({
    name: "gameStatus",
    initialState,
    reducers: {
        setGameWon: (state) => {
            state.value = "won";
        },
        setGameLost: (state) => {
            state.value = "lost";
        },
        restartGame: (state) => {
            state.value = "playing";
        },
    },
});

export const { setGameWon, setGameLost, restartGame } = gameStatusSlice.actions;

export const selectGameStatus = (state: RootState) => state.gameStatus.value;

export default gameStatusSlice.reducer;
