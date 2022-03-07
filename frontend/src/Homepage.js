import './Homepage.css';
import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

onSubmit() {
  if (!this.state.playername) {
    alert("Please enter your username.");
    return;
  }
  navigate('Infopage')
}

function Homepage()
{
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

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
              <br />
              Each Guess must be a valid five-letter word. Hit the enter button to submit.
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
        </span>   
        <span id ="r-nav-item">
          <button id = "r-button" onClick={() => navigate('Leaderboard')}> LEADERBOARD </button>
        </span>
      </div>
      <div className = "mainpage">
        <span>
          <button id="title-fake" > F </button>
          <button id="title-fake" > A </button>
          <button id="title-fake" > K </button>
          <button id="title-fake" > E </button>
        </span>
        <span>
          <button id="title"> W </button>
          <button id="title" > O </button>
          <button id="title" > R </button>
          <button id="title" > D </button>
          <button id="title" > L </button>
          <button id="title" > E </button>
        </span>
        <form class = "name-box"> 
          <input type="text" name="playername" placeholder="Enter Your Name Here!"/>
          <input type="submit" onClick={() => navigate('Gamepage')} value="PLAY" />
        </form>
        <button id = "info-b" onClick={this.onSubmit}> || C.A.N.N.T || </button>
      </div>
    </div> 
  )
}


export default Homepage;



