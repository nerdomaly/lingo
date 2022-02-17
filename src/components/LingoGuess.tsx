import React from "react";
import { useAppSelector } from "../hooks";
import { selectSolution } from "../slices/solutionSlice";
import "./LingoGuess.scss";
import { LingoLetter } from "./LingoLetter";

export const LingoGuess: React.FunctionComponent<{
    guess?: string;
    active: boolean;
    solve: boolean;
}> = (props) => {
    const solution = useAppSelector(selectSolution);

    const isCorrectPlace = (guessLetter: string, wordLetter: string) => {
        if (!props.solve) return false;

        return guessLetter === wordLetter;
    };

    const isCorrectLetter = (guessLetter: string, word: string) => {
        if (!props.solve) return false;

        return word.indexOf(guessLetter) > -1;
    };

    const lingoLetters = (): Array<React.ReactNode> => {
        const items: Array<React.ReactNode> = [];

        for (var i = 0; i < 5; i++) {
            items.push(
                <LingoLetter
                    key={`LingoLetter${i}`}
                    letter={props.guess?.[i]}
                    correctPlace={isCorrectPlace(
                        props.guess?.[i] ?? "",
                        solution[i]
                    )}
                    correctLetter={isCorrectLetter(
                        props.guess?.[i] ?? "",
                        solution
                    )}
                    solve={props.solve}
                />
            );
        }

        return items;
    };

    return (
        <div className={`${props.active ? "active" : ""}`}>
            {lingoLetters()}
        </div>
    );
};
