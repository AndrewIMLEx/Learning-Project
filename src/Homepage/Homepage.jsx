import React from "react";
import Rules from "./Rules";
import Levels from "./Levels";
import Tally from "./Tally";

class Homepage extends React.Component{
    render() {
      return (
      <>
      <div className="card">
        <div className = "header">
        <h1>Guess The Number</h1> 
        <h2>Non Logged In Gameplay</h2>
        </div>
        <div className = "levels">
        <Levels/>
        </div>
        <div className="tally">
        <Tally/>
        </div>
        <div className="rules-card">
        <Rules/>
        </div>
        </div>
      </>
      )
    }
}

export default Homepage
