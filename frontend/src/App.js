import './App.css';
import './Mainpage.css';
import Mainpage from './Mainpage';
import Gameboard from './Gameboard';
import Leaderboard from './Leaderboard';
import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <div>
      <div class="nav-bar">
        <span class="l-nav-item">
          <a href = "https://github.com/trungvu08/CS-35L-Team-Project---C.A.N.N.T." target="_blank" class = "l-button"> 
          MAIN MENU </a>   
        </span> 
        <button onClick={handleClick}>go home</button>
        <span >
          <p class="c-nav-item">CS35L</p>
        </span>   
        <span class="r-nav-item">
          <a href = "https://docs.google.com/document/d/112WOOn5ACMc4VSpA1OxFZR2rZnQP1WlDwgr_u3_vfaU/edit" target="_blank" class = "r-button"> LEADERBOARD </a>
        </span>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/gameboard" element={<Gameboard />}/>
          <Route path="/leaderboard" element={<Leaderboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



