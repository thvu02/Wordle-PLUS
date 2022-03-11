import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Homepage from './Homepage';
import Gamepage from './components/Gamepage';
import GamepageEasy from './components/GamepageEasy';
import GamepageHard from './components/GamepageHard';
import Leaderboard from './components/Leaderboard';
import Infopage from './components/Infopage'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Homepage />} />
          <Route path = "Leaderboard" element={<Leaderboard />} />
          <Route path = "Infopage" element={<Infopage />} />
          <Route path = "Gamepage" element={<Gamepage />} />
          <Route path = "GamepageEasy" element={<GamepageEasy />} />
          <Route path = "GamepageHard" element={<GamepageHard />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;