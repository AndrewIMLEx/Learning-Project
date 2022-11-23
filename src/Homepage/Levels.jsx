import React, { useState, useEffect} from "react"

class Levels extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            levelSelected: 'Make a Selection',
            ButtonClick: '',
            standardNum : Math.floor(Math.random() * 10) + 1,
            difficultNum : Math.floor(Math.random() * 100) + 1
        };
        this.standard = this.standard.bind(this);
        this.difficult = this.difficult.bind(this);
    }
    standard(){
        this.setState({levelSelected:'Standard'});
    }
    difficult(){
        this.setState({levelSelected:'Difficult'});
    }

render(){
    return(
        <>
        <div className="levelselect">
        <h4>Select Difficulty Level</h4>
        <button id="standard" onClick ={this.standard}>Standard</button>
        <button id="difficult" onClick ={this.difficult}>Difficult</button>
        </div>
        <div className="levelCard">
        <h3 style={{color: "black"}}>Selected Level</h3>
        <p style={{color: "red"}}>{ this.state.levelSelected}</p>
        <form id = "LevelForm">
            <input id = "Levelsinput"/>
        </form>
        &nbsp;
        <p style={{color: "red"}}>CORRECT GUESS</p>
        <button id="guess" type = "submit">Guess</button>
        &nbsp;
        <div className="playButtons">
        <button id="play" type = "submit">Play Again</button>
        <button id="login" type = "submit">Log In</button>
        </div>
        </div>
        </>
    )
}
}
export default Levels
