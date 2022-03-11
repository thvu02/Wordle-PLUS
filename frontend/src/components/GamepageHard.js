import React from 'react';
import './Gamepage.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Keyboard from './Keyboard';
import Gameboard from './Gameboard';
import { correctLetters, isValidWord, getRandomWord } from '../check-words.mjs';

let correctWord = getRandomWord(6).toUpperCase();
console.log(correctWord);
let oldCorrectWord;

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
    var keyDict = {};
    keyDict["A"] = "lightgray";
    keyDict["B"] = "lightgray";
    keyDict["C"] = "lightgray";
    keyDict["D"] = "lightgray";
    keyDict["E"] = "lightgray";
    keyDict["F"] = "lightgray";
    keyDict["G"] = "lightgray";
    keyDict["H"] = "lightgray";
    keyDict["I"] = "lightgray";
    keyDict["J"] = "lightgray";
    keyDict["K"] = "lightgray";
    keyDict["L"] = "lightgray";
    keyDict["M"] = "lightgray";
    keyDict["N"] = "lightgray";
    keyDict["O"] = "lightgray";
    keyDict["P"] = "lightgray";
    keyDict["Q"] = "lightgray";
    keyDict["R"] = "lightgray";
    keyDict["S"] = "lightgray";
    keyDict["T"] = "lightgray";
    keyDict["U"] = "lightgray";
    keyDict["V"] = "lightgray";
    keyDict["W"] = "lightgray";
    keyDict["X"] = "lightgray";
    keyDict["Y"] = "lightgray";
    keyDict["Z"] = "lightgray";
    const [show, setShow] = useState(false);
    const [showInvalid, setShowInvalid] = useState(false);
    const [showWin, setShowWin] = useState(false);
    const [showLoss, setShowLoss] = useState(false);
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
      if (event.code === "Enter") {
        handleEnter(curRow, curCol);
      }
      else if (event.code === "Backspace") {
        handleBackspace(curRow, curCol);
      }
      // validate key press to only allow letters
      else if ((event.code[3]).match(/[A-Z]/i) && ((event.code).length==4)) {
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
      if (!(isValidWord(word,6))) {
        setShowInvalid(true);
        return;
      }
      
      var new_keys = correctLetters(word,correctWord);
      for (let i = 0; i < 6; i++) {
        var elements = document.getElementsByClassName(word[i]); // adding colour to keyboard when selected
        for (let j = 0; j < elements.length; j++) {
          if (new_keys[i] == "green" || elements[j].style.backgroundColor == "green") {
            elements[j].style.backgroundColor = "green";
            break;
          }
          else if (new_keys[i] == "yellow" && elements[j].style.backgroundColor != "green") {
            elements[j].style.backgroundColor = "yellow"; // Reduce redundancies and preventing overwriting previous attempts
            break;
          }
          else {
            elements[j].style.backgroundColor = "gray";
          }
        }
      }
      for (let k = 0; k < 6; k++) {
        var elements = document.getElementsByClassName(String.fromCharCode(curRow+97)+String.fromCharCode(k+97)); // storing colour arrangement for the grid
        elements[0].style.backgroundColor = new_keys[k];
      }
        // Check if the word is the same as the win condition
        if (word == correctWord) {
          console.log("game won!");
          oldCorrectWord = correctWord;
          setShowWin(true);
          correctWord = getRandomWord(6).toUpperCase();
          console.log(correctWord);
        } 
        // Check if we are on the last row to know if we lost the game
        else if (curRow === 5) {
          console.log("game lost");
          oldCorrectWord = correctWord;
          setShowLoss(true);
          correctWord = getRandomWord(6).toUpperCase();
          console.log(correctWord);
        }
        // Else restart the column and row if the word was valid but the game was neither won/lost on word
        else {
          setCurCol(0);
          setCurRow(curRow + 1);
        }
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
              <p> A new WORDLE will be available for every gameplay! </p> 
            </Modal.Body>
          </Modal>
        </span> 
        <span >
          <p id ="c-nav-item">CS35L</p>
          <Modal size="lg" show={showInvalid} onHide={() => setShowInvalid(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Invalid word</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Please enter a valid word!</p>
            </Modal.Body>
          </Modal>
          <Modal size="lg" show={showWin} onHide={() => setShowWin(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Congratulations!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You guessed the correct word, {oldCorrectWord}!</p>
                <button id="l-b" onClick={() => navigate('/Leaderboard')}>LEADERBOARD</button>
            </Modal.Body>
          </Modal>
          <Modal size="lg" show={showLoss} onHide={() => setShowLoss(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Better luck next time!</Modal.Title>  
            </Modal.Header>  
            <Modal.Body>
              <p>The correct word was {oldCorrectWord}</p>
              <button id="l-b" onClick={() => navigate('/Leaderboard')}>LEADERBOARD</button>
            </Modal.Body>
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