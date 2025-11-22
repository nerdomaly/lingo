import React, { useEffect, useState, useCallback } from "react";
import { FIVE_LETTER_WORDS } from "../constants/five-letter-words";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectGameStatus, setGameWon, setGameLost } from "../slices/gameStatusSlice";
import { selectSolution } from "../slices/solutionSlice";
import { isAlpha } from "../utils";
import { LingoGuess } from "./LingoGuess";

export const LingoGameBoard: React.FunctionComponent = () => {
    const [guesses, setGuesses] = useState<Array<string>>(
        Array<string>(6).fill("")
    );
    const [currentGuessIndex, setCurrentGuessIndex] = useState<number>(0);

    const dispatch = useAppDispatch();
    const gameStatus = useAppSelector(selectGameStatus);
    const solution = useAppSelector(selectSolution);

    useEffect(() => {
        if (gameStatus === 'playing') {
            setGuesses(Array<string>(6).fill(""));
            setCurrentGuessIndex(0);
        }
    }, [gameStatus]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (gameStatus !== 'playing') {
            return;
        }

        if (event.key.length === 1 && isAlpha(event.key)) {
            if (guesses[currentGuessIndex].length >= 5) {
                return;
            } else {
                const newGuesses = [...guesses];
                newGuesses[currentGuessIndex] += event.key.toUpperCase();
                setGuesses(newGuesses);
            }
        }

        if (event.key === "Backspace") {
            const newGuesses = [...guesses];
            newGuesses[currentGuessIndex] = newGuesses[currentGuessIndex].slice(0, -1);
            setGuesses(newGuesses);
        }

        if (event.key === "Enter") {
            const currentGuess = guesses[currentGuessIndex];
            if (currentGuess.length === 5) {
                if (
                    FIVE_LETTER_WORDS.some(
                        (x) => x.word === currentGuess.toLowerCase()
                    )
                ) {
                    if (currentGuess === solution) {
                        dispatch(setGameWon());
                    } else {
                        if (currentGuessIndex + 1 >= 6) { // Check if this is the last guess
                            dispatch(setGameLost());
                        }
                    }
                    setCurrentGuessIndex(currentGuessIndex + 1);
                }
            }
        }
    }, [guesses, currentGuessIndex, dispatch, gameStatus, solution]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div>
            <div className="game-title">Lingo!</div>
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
