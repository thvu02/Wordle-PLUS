import React, { Component } from 'react';
import './Leaderboard.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from ".././config.js";
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

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
    if (temp == "fourLetters") {
      this.setState(state => ( {filterAssist: "Easy"}));
    }
    else if (temp == "sixLetters") {
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
                data.filter(player => (player.gameVersion == filterAssist)).map((row, index) => (
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