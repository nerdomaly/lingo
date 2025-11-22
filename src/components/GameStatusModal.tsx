import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { restartGame, selectGameStatus } from "../slices/gameStatusSlice";
import { resetSolution, selectSolution } from "../slices/solutionSlice";
import "./GameStatusModal.scss";

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
        <div className="modal-overlay">
            <div className="modal-content">
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
            </div>
        </div>
    );
};
