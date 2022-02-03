import React from 'react';
import './App.scss';
import { LingoGameBoard } from './components/LingoGameBoard';

function App() {
    return (
        <div className="App">
            <LingoGameBoard word="still" />
        </div>
    );
}

export default App;
