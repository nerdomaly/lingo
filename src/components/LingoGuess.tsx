import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { selectSolution } from "../slices/solutionSlice";
import { LingoLetter } from "./LingoLetter";

const GuessWrapper = styled.div<{ $active: boolean }>`
    ${(props) =>
        props.$active &&
        `
        background-color: rgba(255, 255, 255, 0.2);
    `}
`;

export const LingoGuess: React.FunctionComponent<{
    guess?: string;
    active: boolean;
    solve: boolean;
}> = (props) => {
    const solution = useAppSelector(selectSolution);
    const [statuses, setStatuses] = useState<string[]>([]);

    useEffect(() => {
        if (props.solve) {
            const evaluate = (guess: string, solution: string): string[] => {
                const splitSolution = solution.split('');
                const splitGuess = guess.split('');

                const result = new Array(5).fill('absent');
                const solutionCharsTaken = new Array(5).fill(false);

                // First pass for correct letters
                for (let i = 0; i < 5; i++) {
                    if (splitGuess[i] === splitSolution[i]) {
                        result[i] = 'correct';
                        solutionCharsTaken[i] = true;
                    }
                }

                // Second pass for present letters
                for (let i = 0; i < 5; i++) {
                    if (result[i] === 'correct') {
                        continue;
                    }

                    const presentIndex = splitSolution.findIndex(
                        (char, index) => !solutionCharsTaken[index] && char === splitGuess[i]
                    );

                    if (presentIndex > -1) {
                        result[i] = 'present';
                        solutionCharsTaken[presentIndex] = true;
                    }
                }

                return result;
            }
            setStatuses(evaluate(props.guess ?? "", solution));
        }
    }, [props.solve, props.guess, solution]);


    const lingoLetters = (): Array<React.ReactNode> => {
        const items: Array<React.ReactNode> = [];

        for (var i = 0; i < 5; i++) {
            items.push(
                <LingoLetter
                    key={`LingoLetter${i}`}
                    letter={props.guess?.[i]}
                    status={statuses[i]}
                    solve={props.solve}
                />
            );
        }

        return items;
    };

    return (
        <GuessWrapper $active={props.active}>
            {lingoLetters()}
        </GuessWrapper>
    );
};
