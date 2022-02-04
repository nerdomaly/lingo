import React from "react";
import { LingoLetter } from "./LingoLetter";

export const LingoGuess: React.FunctionComponent<{
    word: string;
    guess?: string;
    check?: boolean;
}> = (props) => {
    const lingoLetters = (): Array<React.ReactNode> => {
        const items: Array<React.ReactNode> = [];

        for (var i = 0; i < 5; i++) {
            items.push(
                <LingoLetter
                    key={`LingoLetter${i}`}
                    letter={props.guess?.[i]}
                />
            );
        }

        return items;
    };

    return <div>{lingoLetters()}</div>;
};
