import React from 'react';
import './Keyboard.css';

function Keyboard(props) {
    let topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    let middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    let bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div id="Keyboard">
            <span class="firstRowLetters">
                {topRow.map((letter) => {
                    return <button className={["letters",letter].join(" ")} onClick={() => props.handleClick(props.curRow, props.curCol, letter)}>{letter}</button>
                })}
            </span>
            <span class="secondRowLetters">
                {middleRow.map((letter) => {
                    return <button className={["letters",letter].join(" ")} onClick={() => props.handleClick(props.curRow, props.curCol, letter)}>{letter}</button>
                })}
            </span>
            <span class="thirdRowLetters">
                <button className="letters letterEnter" onClick={() => props.handleEnter(props.curRow, props.curCol, "Hello")}> ENTER </button>
                {bottomRow.map((letter) => {
                    return <button className={["letters",letter].join(" ")} onClick={() => props.handleClick(props.curRow, props.curCol, letter)}>{letter}</button>
                })}            
                <button className="letters letterBkspc" onClick={() => props.handleBackspace(props.curRow, props.curCol)}> ⌫ </button>
            </span>
        </div>
    );
}

export default Keyboard;