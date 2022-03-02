import React from 'react';
import './Infopage.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function Infopage() {
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
        <button id = "r-button" onClick={() => navigate('/')}> MAIN MENU </button>
      </span>
    </div>
    <div id = "info">
      <p id = "group_name">|| C.A.N.N.T ||</p>
      <hr />
      <span id ="block_display">
          <button id="fake" > F </button>
          <button id="fake" > A </button>
          <button id="fake" > K </button>
          <button id="fake" > E </button>
      </span>
      <span id ="block_display">
          <button id="title1"> W </button>
          <button id="title1" > O </button>
          <button id="title1" > R </button>
          <button id="title1" > D </button>
          <button id="title1" > L </button>
          <button id="title1" > E </button>
       </span>
    </div>

  </div>
  )
}

export default Infopage;