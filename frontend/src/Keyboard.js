import React from 'react';

function Keyboard() {
    return (
        <div>
            <span className="firstRowLetters">
            <button className="letters" > Q </button>
            <button className="letters" > W </button>
            <button className="letters" > E </button>
            <button className="letters" > R </button>
            <button className="letters" > T </button>
            <button className="letters" > Y </button>
            <button className="letters" > U </button>
            <button className="letters" > I </button>
            <button className="letters" > O </button>
            <button className="letters" > P </button>
            </span>
            <span className="secondRowLetters">
            <button className="letters" > A </button>
            <button className="letters" > S </button>
            <button className="letters" > D </button>
            <button className="letters" > F </button>
            <button className="letters" > G </button>
            <button className="letters" > H </button>
            <button className="letters" > J </button>
            <button className="letters" > K </button>
            <button className="letters" > L </button>
            </span>
            <span className="thirdRowLetters">
            <button className="letters" > ENTER </button>
            <button className="letters" > Z </button>
            <button className="letters" > X </button>
            <button className="letters" > C </button>
            <button className="letters" > V </button>
            <button className="letters" > B </button>
            <button className="letters" > N </button>
            <button className="letters" > M </button>
            <button className="letters" > ⌫ </button>
            </span>
        </div>
    );
}

export default Keyboard;