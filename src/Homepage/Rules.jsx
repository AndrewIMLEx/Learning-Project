import React from "react";

class Rules extends React.Component{
    render() {
      return (
      <>
      <div className="rules">
        <h4 style={{color: "white",fontSize:"1.3em",marginLeft:'3em',paddingBottom:'1em'}}>How to Play</h4>
        <ol>
            <li>Choose Difficulty Level-Easy(1-10) or Hard(1-100).</li>

            <li>The Computer will generate a random number between 1-10 for standard and 1-100 for Difficult.</li>

            <li>You only have <a style={{color: "red"}}>3 chances</a> to guess a number and beat the Computer.</li>
            
            <li>Don't worry the computer will notify you if your guess is higher or lower than the random generated number.</li>
        </ol>
        </div>
      </>
      )
    }
}

export default Rules
