import React from 'react';
import './Gameboard.css';
import Square from './Square';
import {useState} from 'react';

function Gameboard() {
    const [letters, setLetters] = useState(Array(30).fill(null));

    function renderSquare(i) {
        return (
            <Square 
                value={letters[i]}
            />
        )
    }

    return (
        <div id = "gameboard">
            <span id="block_display">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
            </span>
            <span id="block_display">
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                {renderSquare(9)}
            </span>
            <span id="block_display">
                {renderSquare(10)}
                {renderSquare(11)}
                {renderSquare(12)}
                {renderSquare(13)}
                {renderSquare(14)}
            </span>
            <span id="block_display">
                {renderSquare(15)}
                {renderSquare(16)}
                {renderSquare(17)}
                {renderSquare(18)}
                {renderSquare(19)}
            </span>
            <span id="block_display">
                {renderSquare(20)}
                {renderSquare(21)}
                {renderSquare(22)}
                {renderSquare(23)}
                {renderSquare(24)}
            </span>
            <span id="block_display">
                {renderSquare(25)}
                {renderSquare(26)}
                {renderSquare(27)}
                {renderSquare(28)}
                {renderSquare(29)}
            </span>
        </div>
    );
}

export default Gameboard;