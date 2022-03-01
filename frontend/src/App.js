import './App.css';
import React from 'react';

import Keyboard from './Keyboard'



function App() {
  return (
    <div>
      <div class="nav-bar">
        <span class="l-nav-item">
          <a href ="https://github.com/trungvu08/CS-35L-Team-Project---C.A.N.N.T." target="_blank" class = "l-button"> MAIN MENU </a>   
        </span> 
        <span >
          <p class="c-nav-item">CS35L</p>
        </span>   
        <span class="r-nav-item">
          <a href = "https://docs.google.com/document/d/112WOOn5ACMc4VSpA1OxFZR2rZnQP1WlDwgr_u3_vfaU/edit" target="_blank" class = "r-button"> LEADERBOARD </a>
        </span>
      </div>
      <div class = "mainpage">
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
          <input type="text" id="namebox" placeholder="Enter Your Name Here!"/>
          <input type="submit" value="PLAY" />
        </form>
        <a href ="https://github.com/trungvu08/CS-35L-Team-Project---C.A.N.N.T." target="_blank" class = "info-b"> || C.A.N.N.T || </a>
        <div id="Keys">
        <Keyboard />
        </div>
      </div>
    </div> 
  );
}

export default App;



