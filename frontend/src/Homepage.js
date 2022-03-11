import './Homepage.css';
import Axios from "axios";
import { BASE_URL } from "./config.js";
import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

let PLAYER_NAME = "";
let GAME_MODE = "";

const axios = Axios.create({
  baseURL: BASE_URL,
});

function Homepage()
{
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState("");


  const handleSubmit = (event) => {
    if(!playerName) {
      alert('Pleaser enter a name to play.');
      return;
    } else {
      axios.post("/addname", {playerName});
      PLAYER_NAME = playerName;
      GAME_MODE = "Medium";
      navigate('Gamepage');
    }
  }

  const handleSubmitEasy = (event) => {
    if(!playerName) {
      alert('Pleaser enter a name to play.');
      return;
    } else {
      axios.post("/addnameE", {playerName});
      PLAYER_NAME = playerName;
      GAME_MODE = "Easy";
      navigate('GamepageEasy');
    }
  }

  const handleSubmitHard = (event) => {
    if(!playerName) {
      alert('Pleaser enter a name to play.');
      return;
    } else {
      axios.post("/addnameH", {playerName});
      PLAYER_NAME = playerName;
      GAME_MODE = "Hard";
      navigate('GamepageHard');
    }
  }

  return (
    <div>
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
              <br/>
              Each Guess must be a valid word. Hit the enter button to submit.
              <br />
              After each guess, the color of the tiles will change to show how close your guess was to the word.
              <br /> <br />
              Please enter your name and select the difficulty to PLAY the game!
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
        </span>   
        <span id ="r-nav-item">
          <button id = "r-button" onClick={() => navigate('Leaderboard')}> LEADERBOARD </button>
        </span>
      </div>
      <div className = "mainpage">
        <span>
          <button id="title" > W </button>
          <button id="title" > O </button>
          <button id="title" > R </button>
          <button id="title" > D </button>
          <button id="title" > L </button>
          <button id="title" > E </button>
        </span>
        <span>
          <button id="title-fake" > P </button>
          <button id="title-fake" > L </button>
          <button id="title-fake" > U </button>
          <button id="title-fake" > S </button>
        </span>
        <form class = "name-box"> 
          <input type="text" name = "playername" value={playerName} onChange={(pname) => setPlayerName(pname.target.value)}  placeholder="Enter Your Name Here!"/>
          <div id= "display-flex-button">
            <button id="submitE" type="submit" name = "easy" onClick = {handleSubmitEasy}>EASY</button>
            <button id="submit" type="submit" name = "medium" onClick = {handleSubmit}>MEDIUM</button>
            <button id="submitH" type="submit" name = "hard" onClick = {handleSubmitHard}>HARD</button>
          </div>
        </form>
        <button id = "info-b" onClick={() => navigate('Infopage')}> || C.A.N.N.T || </button>
      </div>
    </div> 
  )
}

export default Homepage;
export { PLAYER_NAME };
export { GAME_MODE };


