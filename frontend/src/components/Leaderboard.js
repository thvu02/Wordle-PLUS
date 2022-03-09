import React, { Component } from 'react';
import './Leaderboard.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

import { BASE_URL } from ".././config.js";
import Table from 'react-bootstrap/Table';
import axios from 'axios';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      info: []
    }
  }

  handleClick() {
    console.log('click happened');
  }

  getServerData(url, stateName) {
    console.log(1)
    axios.get(url)
      .then(( {data} ) => {
        this.setState({ [stateName]: data });
        console.log(this.state.info);
      })
  }
  // https://fcctop100.herokuapp.com/api/fccusers/top/recent
  // http://localhost:5000
  componentDidMount() {
    this.getServerData('http://localhost:5000', "info");
  };

  render () {
    const { info } = this.state;
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
                info.map((row, index) => (
                <tr key={row.playerName}>
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
// export default Leaderboard;





/* function Leaderboard() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  
  const handleClick = (e) => {
    console.log(e.target)
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
        
        <span id ="r-nav-item">
          <button id = "r-button" onClick={() => {
            this.props.navigation.navigate('YourScreen')
          }}></button>
        </span>

      </div>

      <div classname = "threeButtons">
        <button id = "option1" onClick={handleClick} dataType='4'>4 Letters</button>
        <button id = "option2" onClick={handleClick} dataType='5'>5 Letters</button>
        <button id = "option3" onClick={handleClick} dataType='6'>6 Letters</button>
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
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    )
} */

export default Leaderboard;



// class MyBackButton extends React.Component {
//   render() {
//     // Get it from props
//     const { navigation } = this.props;
//   }
// }

// // Wrap and export
// export default function(props) {
//   const navigation = useNavigation();

//   return <MyBackButton {...props} navigation={navigation} />;
