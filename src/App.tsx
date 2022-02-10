import React, { useMemo } from "react";
import "./App.scss";
import { LingoGameBoard } from "./components/LingoGameBoard";
import { FIVE_LETTER_WORDS } from "./constants/five-letter-words";

function GetRandom(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

function App() {
    const word = useMemo(() => {
        let solutionSet = FIVE_LETTER_WORDS.filter((x) => x.solution === 1).map(
            (x) => x.word
        );

        let retVal = solutionSet[GetRandom(solutionSet.length)].toUpperCase();

        console.log("App: " + retVal);
        return retVal;
    }, []);

    return (
        <div className="App">
            <LingoGameBoard word={word} />
        </div>
    );
}

export default App;
