import './Mainpage.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Mainpage() {

  return (
    <div>
      <div class = "mainpage">
      <span>
        <button className="b-bright" onclick=""> <img id="icon" src = "bright.png" /> </button>
        <button className="b-dark"> <img id="icon" src = "dark.png" /> </button>
      </span>
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

      </div>
    </div> 
  );
}

export default Mainpage;



