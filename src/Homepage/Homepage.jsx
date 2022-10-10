import React from "react";
import Rules from "./Rules";
class Homepage extends React.Component{
    render() {
      return (
      <>
      <div className="card">
        <h1>Guess The Number</h1> 
        <h2>Non Logged In Gameplay</h2>
        <Rules/>
        </div>
      </>
      )
    }
}

export default Homepage