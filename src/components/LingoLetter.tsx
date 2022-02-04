import React from "react";
import "./LingoLetter.scss";

export const LingoLetter: React.FunctionComponent<{
    letter?: string;
    correctLetter: boolean;
    correctPlace: boolean;
}> = (props) => {
    return (
        <div
            className={`letterBox ${props.correctPlace ? "correctPlace" : ""} ${
                props.correctLetter && !props.correctPlace
                    ? "correctLetter"
                    : ""
            }`}
        >
            {props.letter ?? <>&nbsp;</>}
        </div>
    );
};
