import React, { useEffect, useState } from "react";
import { FIVE_LETTER_WORDS } from "../constants/five-letter-words";
import { isAlpha } from "../utils";
import { LingoGuess } from "./LingoGuess";

export const LingoGameBoard: React.FunctionComponent = () => {
    let [guesses, setGuesses] = useState<Array<string>>(
        Array<string>(6).fill("")
    );
    let [currentGuessIndex, setCurrentGuessIndex] = useState<number>(0);

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key.length === 1 && isAlpha(event.key)) {
            if (guesses[currentGuessIndex].length >= 5) {
                return;
            } else {
                const newGuesses = guesses.slice();

                newGuesses[currentGuessIndex] =
                    newGuesses[currentGuessIndex] + event.key.toUpperCase();

                setGuesses(newGuesses);
            }
        }

        if (event.key === "Backspace") {
            const newGuesses = guesses.slice();

            newGuesses[currentGuessIndex] = newGuesses[
                currentGuessIndex
            ].substring(0, newGuesses[currentGuessIndex].length - 1);

            setGuesses(newGuesses);
        }

        if (event.key === "Enter") {
            if (guesses[currentGuessIndex].length === 5) {
                if (
                    FIVE_LETTER_WORDS.filter(
                        (x) =>
                            x.word === guesses[currentGuessIndex].toLowerCase()
                    ).length > 0
                ) {
                    setCurrentGuessIndex(currentGuessIndex + 1);
                }
            }
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    });

    return (
        <div>
            <div>Lingo!</div>
            {guesses.map((guess, index) => {
                return (
                    <LingoGuess
                        key={`LingoWord${index}`}
                        guess={guess}
                        active={index === currentGuessIndex}
                        solve={currentGuessIndex > index}
                    />
                );
            })}
        </div>
    );
};
