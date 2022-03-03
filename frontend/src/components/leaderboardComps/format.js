import React from 'react';

export default function profiles({Leaderboard}) {
    return (
        <div id = "profile">
            <h1 className = 'leaderboard'>Leaderboard</h1>
            {Item(Leaderboard)}
        </div>
    )
}

function Item(data) {
    return (
        <>
            {
                data.map((value,index) => (
                    <div className = "flex" key = {index}>
                        <div className = "item">
                            <div className = "info">
                            <h1 className = 'name text-dark'>{value.name}</h1>
                            </div>
                        </div>
                        <div className = "item">
                            <span>score: {value.score}</span>
                        </div>
                        <div className = "item">
                            <span>time: {value.time}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}