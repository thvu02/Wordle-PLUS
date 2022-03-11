import React from 'react'; 
import { Component } from 'react';
import './Leaderboard.css';
import { BASE_URL } from ".././config.js";
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

import navHelper from './leaderboardComps/navHelper.js';

const axios = Axios.create({
  baseURL: BASE_URL,
});

class Leaderboard extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: [],
      filterAssist: ""
    }
  }

  componentDidMount() {
    axios.get('/')
      .then(res => {
        const data = res.data;
        data.sort((a, b) => (a.playerScore < b.playerScore) ? 1 : ((b.playerScore < a.playerScore) ? -1 : 0));
        this.setState({ data: data });
        this.state.data.forEach((e) => {
          console.log(`${e.playerName}`);
        });
      })
  };

  handleClick(e) {
    var temp = e.target.id;
    if (temp === "fourLetters") {
      this.setState(state => ( {filterAssist: "Easy"}));
    }
    else if (temp === "sixLetters") {
      this.setState(state => ( {filterAssist: "Hard"}));
    }
    else {
      this.setState(state => ( {filterAssist: "Medium"}));
    }
  }

  render() {
    const { data, filterAssist } = this.state;

    return (
      <div>

        <div class="nav-bar">
          {/* <span id="l-nav-item">
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
          </span>  */}
          <span >
            <p id ="c-nav-item">CS35L</p>
          </span>   
          <span id ="r-nav-item">
            <button id = "r-button" onClick={() => navHelper('/')}> MAIN MENU </button>
          </span>
        </div>

        <div classname="threeButtons">
          <button id="fourLetters" onClick={this.handleClick}>Easy Mode Rankings</button>
          <button id="fiveLetters" onClick={this.handleClick}>Medium Mode Rankings</button>
          <button id="sixLetters" onClick={this.handleClick}>Hard Mode Rankings</button>
        </div>
        <div className="leaderboardTable">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Rankings</th>
                <th>Name</th>
                <th>Score</th>
                <th>Game Mode</th>
              </tr>
            </thead>
            <tbody>
              {
                data.filter(player => (player.gameVersion === filterAssist)).map((row, index) => (
                  <tr>
                    <td>{"#" + (index + 1)}</td>
                    <td>{row.playerName}</td>
                    <td>{row.playerScore}</td>
                    <td>{row.gameVersion}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    )
  }

}
export default Leaderboard;