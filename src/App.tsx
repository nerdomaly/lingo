import React, { useState } from "react";
import "./App.scss";
import { LingoGameBoard } from "./components/LingoGameBoard";
import { FIVE_LETTER_WORDS } from "./constants/five-letter-words";

function GetRandom(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

function App() {
    const [word] = useState(
        FIVE_LETTER_WORDS[GetRandom(FIVE_LETTER_WORDS.length)].toUpperCase()
    );

    console.log(word);
    return (
        <div className="App">
            <LingoGameBoard word={word} />
        </div>
    );
}

export default App;
