import React from "react"
import "./navbar.css"

function NavBar(props) {
    return (
      <div className="my-nav container-fluid">
        <div className="container my-navbar">
          <div className="brand"><a href="/">Clicky Game</a></div>
          <div className="title">Click an image to begin!</div>
          <div className="score">Score: {props.score} | Top Score: {props.topScore}</div>
        </div>
      </div>
    );
  }
  
  export default NavBar;