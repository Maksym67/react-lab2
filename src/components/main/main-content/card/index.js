import React from "react";
import "./index.css";

function Card(props) {
    return (
        <div className="card-top">
            <img className="image-content" src={props.image}></img>
            <div className="text-content">
                <div className="headline-text">{props.headline}</div>
                <div className="description-text">{props.description}</div>
                <a className="card-link" href={props.link}>Read More »</a>
            </div>
        </div>
    );
}

export default Card;