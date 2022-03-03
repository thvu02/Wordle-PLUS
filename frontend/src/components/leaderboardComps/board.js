import React from 'react';
import Format from './format';
import { Leaderboard } from './samples';

export default function Board() {
    return (
        <div className = "board">
            <Format Leaderboard = {Leaderboard}></Format>
        </div>
    )
}