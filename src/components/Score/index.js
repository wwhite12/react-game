import React from "react";
import "./style.css";

function Score(props) {
    return (
        <header className="userScore">
            <div className="row">
                <div className="col-md-6 col-left"><h5>{props.title}</h5></div>
                <div className="col-md-3 col-right"><h6>High Score: {props.highScore}</h6></div>
                <div className="col-md-3 col-right"><h6>Current Score: {props.score}</h6></div>
            </div>
        </header>
    )
}

export default Score;