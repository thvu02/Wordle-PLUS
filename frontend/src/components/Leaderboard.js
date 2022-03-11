import React, { Component } from 'react';
import './Leaderboard.css';
import Navbar from './Navbar.js';
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
      this.setState(state => ( {filterAssist: "4"}));
      // filterAssist = "4";
    }
    else if (temp == "sixLetters") {
      this.setState(state => ( {filterAssist: "6"}));
      // filterAssist = "6";
    }
    else {
      this.setState(state => ( {filterAssist: "5"}));
      // filterAssist = "5";
    }
  }

  render() {
    const { data, filterAssist } = this.state;
    return (
      <div>
        <Navbar />
        <div classname="threeButtons">
          <button id="fourLetters" onClick={this.handleClick} data_id='4'>4 Letters</button>
          <button id="fiveLetters" onClick={this.handleClick} data_id='5'>5 Letters</button>
          <button id="sixLetters" onClick={this.handleClick} data_id='6'>6 Letters</button>
        </div>
        <div className="leaderboardTable">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Rankings</th>
                <th>Name</th>
                <th>Score</th>
                <th>Game Version</th>
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