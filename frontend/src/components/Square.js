import React from 'react';
import './Square.css';

function Square(props) {
    return (
        <button className={["square", props.value[1]].join(" ")}>{props.value[0]}</button>
    )
}

export default Square;