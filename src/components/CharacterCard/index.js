import React from ("react");
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <span onClick={()=>props.shuffle()}></span>
        </div>
    )
}