import React from 'react';
import './Keyboard.css';
import Gamepage from './Gamepage';

function Keyboard() {
    let topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    let middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    let bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div id="Keyboard">
            <span class="firstRowLetters">
                {topRow.map((letter) => {
                    return <button className="letters">{letter}</button>
                })}
            </span>
            <span class="secondRowLetters">
                {middleRow.map((letter) => {
                    return <button className="letters">{letter}</button>
                })}
            </span>
            <span class="thirdRowLetters">
                <button className="letters letterEnter" > ENTER </button>
                {bottomRow.map((letter) => {
                    return <button className="letters">{letter}</button>
                })}            
                <button className="letters letterBkspc" > ⌫ </button>
            </span>
        </div>
    );
}

export default Keyboard;