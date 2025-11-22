import React from "react";
import styled from "styled-components";
import { LingoGameBoard } from "./components/LingoGameBoard";
import { GameStatusModal } from "./components/GameStatusModal";

const AppWrapper = styled.div`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    padding-top: 2vh;
    box-sizing: border-box; /* Include padding in height */
    font-size: calc(10px + 2vmin);
    color: white;

    .game-title {
        font-size: 8vmin;
        margin-bottom: 0.75em; /* Keep bottom margin */
    }
`;

function App() {
    return (
        <AppWrapper>
            <LingoGameBoard />
            <GameStatusModal />
        </AppWrapper>
    );
}

export default App;
