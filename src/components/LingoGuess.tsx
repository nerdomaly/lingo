import React from "react";
import "./LingoGuess.scss";
import { LingoLetter } from "./LingoLetter";

export const LingoGuess: React.FunctionComponent<{
    word: string;
    guess?: string;
    active: boolean;
}> = (props) => {
    const isCorrectPlace = (guessLetter: string, wordLetter: string) => {
        if (props.active || guessLetter === "") return false;

        return guessLetter === wordLetter;
    };

    const isCorrectLetter = (guessLetter: string, word: string) => {
        if (props.active || guessLetter === "") return false;

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
                        props.word[i]
                    )}
                    correctLetter={isCorrectLetter(
                        props.guess?.[i] ?? "",
                        props.word
                    )}
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
