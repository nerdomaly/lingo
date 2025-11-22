import React from "react";
import styled from "styled-components";

const FlipCard = styled.div`
    display: inline-block;
    width: 1.5em;
    height: 2em;
    line-height: 2em;
    text-transform: uppercase;
    margin: 0.25em;
    border: 1px solid white;
    font-size: 5vmin;
    perspective: 1000px;
`;

const FlipCardInner = styled.div<{ $flip: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${(props) => (props.$flip ? "transform: rotateY(180deg);" : "")}
`;

const FlipCardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`;

const FlipCardFront = styled(FlipCardFace)`
    background-color: #282c34;
    z-index: 1;
    transform: rotateY(0deg) translateZ(1px);
`;

const FlipCardBack = styled(FlipCardFace)<{ status: string }>`
    transform: rotateY(180deg) translateZ(1px);
    z-index: 0;
    ${(props) => {
        if (props.status === "correct") {
            return "background-color: rgba(0, 255, 0, 0.2);";
        } else if (props.status === "present") {
            return "background-color: rgba(255, 255, 0, 0.8);";
        } else {
            return "background-color: #3a3a3c;";
        }
    }}
`;

export const LingoLetter: React.FunctionComponent<{
    letter?: string;
    status: string;
    solve: boolean;
}> = (props) => {
    return (
        <FlipCard>
            <FlipCardInner $flip={props.solve}>
                <FlipCardFront>
                    {props.letter ?? <>&nbsp;</>}
                </FlipCardFront>
                <FlipCardBack status={props.status}>
                    {props.letter ?? <>&nbsp;</>}
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    );
};
