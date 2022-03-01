import './Homepage.css';
import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Homepage()
{
  const [show, setShow] = useState(false);

  return (
    <div>
      <div class="nav-bar">
        <span class="l-nav-item">
          <button variant="primary" className = "l-button" onClick={() => setShow(true)}> INSTRUCTION </button>
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
          <p class="c-nav-item">CS35L</p>
        </span>   
        <span class="r-nav-item">
          <a href = "https://docs.google.com/document/d/112WOOn5ACMc4VSpA1OxFZR2rZnQP1WlDwgr_u3_vfaU/edit" target="_blank"  rel="noreferrer" class = "r-button"> LEADERBOARD </a>
        </span>
      </div>
      <div className = "mainpage">
      <span>
          <button className="title-fake"> F </button>
          <button className="title-fake" > A </button>
          <button className="title-fake" > K </button>
          <button className="title-fake" > E </button>
        </span>
        <span>
          <button className="title"> W </button>
          <button className="title" > O </button>
          <button className="title" > R </button>
          <button className="title" > D </button>
          <button className="title" > L </button>
          <button className="title" > E </button>
        </span>
        <form class = "name-box"> 
          <input type="text" placeholder="Enter Your Name Here!"/>
          <input type="submit" value="PLAY" />
        </form>
        <a href ="CANNT\frontend\src\homepage-components\info.html" target="_blank"  rel="noreferrer" class = "info-b"> || C.A.N.N.T || </a>
      </div>
    </div> 
  )
}


export default Homepage;



