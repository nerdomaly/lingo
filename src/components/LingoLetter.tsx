import React from "react";
import "./LingoLetter.scss";

export const LingoLetter: React.FunctionComponent<{
    letter?: string;
    status: string;
    solve: boolean;
}> = (props) => {
    return (
        <div className="flip-card">
            <div className={`flip-card-inner ${props.solve ? "flip" : ""}`}>
                <div className={`flip-card-front `}>
                    {props.letter ?? <>&nbsp;</>}
                </div>
                <div className={`flip-card-back ${props.status}`}>
                    {props.letter ?? <>&nbsp;</>}
                </div>
            </div>
        </div>
    );
};
