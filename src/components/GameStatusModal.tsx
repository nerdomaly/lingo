import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { restartGame, selectGameStatus } from "../slices/gameStatusSlice";
import { resetSolution, selectSolution } from "../slices/solutionSlice";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #282c34;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: white;

    h2 {
        margin-top: 0;
    }

    p {
        margin-bottom: 20px;
    }

    button {
        background-color: #61dafb;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
    }
`;

export const GameStatusModal: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const gameStatus = useAppSelector(selectGameStatus);
    const solution = useAppSelector(selectSolution);

    const handlePlayAgain = () => {
        dispatch(restartGame());
        dispatch(resetSolution());
    };

    if (gameStatus === "playing") {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContent>
                {gameStatus === "won" && (
                    <>
                        <h2>You Win!</h2>
                        <p>Congratulations, you guessed the word!</p>
                    </>
                )}
                {gameStatus === "lost" && (
                    <>
                        <h2>Game Over</h2>
                        <p>The word was: <strong>{solution}</strong></p>
                    </>
                )}
                <button onClick={handlePlayAgain}>Play Again</button>
            </ModalContent>
        </ModalOverlay>
    );
};
