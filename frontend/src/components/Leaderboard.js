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
      data: []
    }
  }
  
  handleClick() {
    console.log('click happened');
  }
    
  componentDidMount() {
    axios.get('/')
      .then(res => {
        const data = res.data;
        data.sort((a,b) => (a.playerName > b.playerName) ? 1 : ((b.playerName > a.playerName) ? -1 : 0));
        this.setState({ data: data });
        this.state.data.forEach((e) => {
          console.log(`${e.playerName}`);
        });
      })
  };

  render () {
    const { data } = this.state;
    return (
      <div>

      <div classname = "threeButtons">
          <button id = "option1" onClick={this.handleClick} dataType='4'>4 Letters</button>
          <button id = "option2" onClick={this.handleClick} dataType='5'>5 Letters</button>
          <button id = "option3" onClick={this.handleClick} dataType='6'>6 Letters</button>
        </div>

        <div className = "leaderboardTable">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((row, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{row.playerName}</td>
                </tr>
                ))
              }
            </tbody>
          </Table>
        </div>

      </div>
    );
  }
}
export default Leaderboard;