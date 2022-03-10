import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Homepage from './Homepage';
import Gamepage from './components/Gamepage';
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
        </Routes>
        </BrowserRouter>
    )
}

export default App;