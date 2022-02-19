import React, { useEffect } from "react";
import "./App.scss";
import { LingoGameBoard } from "./components/LingoGameBoard";
import { FIVE_LETTER_WORDS } from "./constants/five-letter-words";

import { setSolution } from "./slices/solutionSlice";

import { useAppDispatch } from "./hooks";
import { getRandomNumber } from "./utils";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        let solutionSet = FIVE_LETTER_WORDS.filter((x) => x.solution === 1).map(
            (x) => x.word
        );

        let retVal =
            solutionSet[getRandomNumber(solutionSet.length)].toUpperCase();

        dispatch(setSolution(retVal));
    });

    return (
        <div className="App">
            <LingoGameBoard />
        </div>
    );
}

export default App;
