import React from 'react';
import './Gamepage.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Keyboard from './Keyboard';
import Gameboard from './Gameboard';
// import {isValidWord} from '../check-words.mjs';

function Gamepage() {
    // definitions of state
    const [curRow, setCurRow] = useState(0);
    const [curCol, setCurCol] = useState(0);
    const [letters, setLetters] = useState([
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ]);
    const [show, setShow] = useState(false);
    const [showInvalid, setShowInvalid] = useState(false);
    const navigate = useNavigate();

    // handleClick handles a regular letter press on the keyboard
    function handleClick(row, col, input) {
      // create a copy of the state of letters
      const lettersConst = [...letters];
      lettersConst[row][col] = input;
      // do nothing if we are on the last column
      if (curCol === 6) {
        return;
      }
      // otherwise setLetters and setCurWord accordingly
      setCurCol(curCol + 1);
      setLetters(lettersConst);
    }

    // handleBackspace handles when the backspace key is clicked
    function handleBackspace(row, col) {
      const lettersConst = [...letters];
      if (col === 0) {
        return;
      } else {
        lettersConst[row][col - 1] = null;
        setLetters(lettersConst);
        setCurCol(curCol - 1);
      }
    }

    // handle handles when a key is pressed
    function handleKeypress(event) {
      const lettersConst = [...letters];
      // check cases for special key presses
      if (event.code == "Enter") {
        // PLACEHOLDER until a new function is added that checks if the word is valid 
        handleEnter(curRow, curCol, "worde");
      }
      else if (event.code == "Backspace") {
        handleBackspace(curRow, curCol);
      }
      // validate key press to only allow letters
      else if ((event.code[3]).match(/[a-z]/i)) {
        if (curCol === 6) {
          // letter not added if row already full
          return;
        } else {
          // add entered letter (KeyM) so [3]
          lettersConst[curRow][curCol] = event.code[3];
          setCurCol(curCol + 1);
        }
        setLetters(lettersConst);
      }
    }

    // handleEnter handles when the enter key is pressed on the keyboard
    function handleEnter(row, col) {
    // Return early if we aren't at 6 letters yet
      if (col !== 6) {
        return;
      } else {
        // Get the current row's word
        let word = "";
        for (let i = 0; i < 6; i++) {
          word += letters[row][i];
        }
        // Return early if the word isn't valid
        // PLACEHOLDER UNTIL FUNCTION THAT CHECKS IF WORK IS VALID IS IMPLEMENTED
        if (true) {
          setShowInvalid(true);
          return;
        }
        // Restart column, row and (word?) if valid
        setCurCol(0);
        setCurRow(curRow + 1);
      }
    }

    // handleKeypress handles when a key is pressed
    function handleKeypress(event) {
      const lettersConst = [...letters];
      // check cases for special key presses
      if (event.code === "Enter") {
        handleEnter(curRow, curCol);
      }
      else if (event.code === "Backspace") {
        handleBackspace(curRow, curCol);
      }
      // validate key press to only allow letters
      else if ((event.code[3]).match(/[A-Z]/i) && ((event.code).length === 4)) {
        if (curCol === 6) {
          // letter not added if row already full
          return;
        } else {
          // add entered letter (KeyM) so [3]
          lettersConst[curRow][curCol] = event.code[3];
          setCurCol(curCol + 1);
        }
        setLetters(lettersConst);
      }
    }

    return (
      // look for key pressed down and trigger keypress handler event [tabIndex necessary]
    <div tabIndex="0" onKeyDown={handleKeypress}>
      <div class="nav-bar">
        <span id="l-nav-item">
          <button variant="primary" id = "l-button" onClick={() => setShow(true)}> INSTRUCTION </button>
          <Modal size ="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>HOW TO PLAY</Modal.Title>
            </Modal.Header>
            <Modal.Body class="modal-txt">
              <p id = "text1">
              Guesses the WORDLE in six tries.
              <br />
              Each Guess must be a valid six-letters word. Hit the enter button to submit.
              <br />
              After each guess, the color of the tiles will change to show how close your guess was to the word.
              </p> 
              <hr id="line" />
              <div id="display-flex">
                <button id="green"> E </button> 
                <p id="txt"> The letter E is in the word and in the correct spot. </p> <br />
              </div>
              <div id="display-flex">
                <button id="yellow" > G  </button>
                <p id="txt"> The letter G is in the word but in the wrong spot. </p> 
              </div>
              <div id="display-flex">
                <button id="gray" > G </button>
                <p id="txt"> The letter G is not in the word in any spot. </p> 
              </div>
              <hr id="line" />
              <p> A new WORDLE will be available each day! </p> 
            </Modal.Body>
          </Modal>
        </span> 
        <span >
          <p id ="c-nav-item">CS35L</p>
          <Modal size="lg" show={showInvalid} onHide={() => setShowInvalid(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Please enter a valid word!</Modal.Title>
            </Modal.Header>
          </Modal>
        </span>   
        <span id ="r-nav-item">
          <button id = "r-button" onClick={() => navigate('/')}> MAIN MENU </button>
        </span>
      </div>

      <div id="Gamegrid">
      <Gameboard letters={letters} difficulty="hard"/>
      </div>
      <div id="Keys">
        <Keyboard handleClick={handleClick} handleBackspace={handleBackspace} handleEnter={handleEnter} curRow={curRow} curCol={curCol}/>
      </div>
    </div>
    )
}

export default Gamepage;