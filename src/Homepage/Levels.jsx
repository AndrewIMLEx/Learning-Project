import React, { useState, useEffect} from "react"

class Levels extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            levelSelected: 'Make a Selection',
            standardNum : Math.floor(Math.random() * 10) + 1,
            difficultNum : Math.floor(Math.random() * 100) + 1,
            input: '',
            tooHightooLow: ''
        };
        this.standard = this.standard.bind(this);
        this.difficult = this.difficult.bind(this);
        this.guessStatus = this.guessStatus.bind(this)
    }
    standard(){
        this.setState({levelSelected:'Standard'});
    }
    difficult(){
        this.setState({levelSelected:'Difficult'});
    }
    guessStatus(){
        if (levelSelected == 'Standard'){
            if(state.input == this.state.standardNum){
                tooHightooLow('Good Job!Correct');
            }
            if(state.input > state.standardNum && state.input < 11){
                tooHightooLow('Wrong!Too High');
            }else if (state.input < this.state.standardNum && this.state.input < 11){
                tooHightooLow('Wrong!Too Low');
            }
            else if (levelSelected == 'Difficult'){
                if(state.input == this.state.standardNum){
                    tooHightooLow('Good Job!Correct');
                }
                if(state.input > state.standardNum && state.input < 101){
                    tooHightooLow('Wrong!Too High');
                }else if (state.input < this.state.standardNum && this.state.input < 101){
                    tooHightooLow('Wrong!Too Low');
                }
            }
            else('Please Enter a Number')
        };     
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
        <p style={{color: "red",fontSize: 20,marginLeft:'7em'}}>{ this.state.levelSelected}</p>
        <form id = "LevelForm">
            <input id = "Levelsinput"/>
        </form>
        <p style={{color: "red",marginLeft:'6em'}}><a style={{color: "black"}}>Your Guess is:</a>Correct</p>
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
