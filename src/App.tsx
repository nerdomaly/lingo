import React from "react";
import "./App.scss";
import { LingoGameBoard } from "./components/LingoGameBoard";
import { GameStatusModal } from "./components/GameStatusModal";

function App() {
    return (
        <div className="App">
            <LingoGameBoard />
            <GameStatusModal />
        </div>
    );
}

export default App;
