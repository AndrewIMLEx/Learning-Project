import React, { useState, useEffect} from "react"

class Levels extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            levelSelected: "LEVEL",             
            input: "",
            tooHightooLow: "",
            trackSelection: [],
            standardNum: Math.floor(Math.random() *10) + 1 + "",
            difficultNum: Math.floor(Math.random() *100) + 1 + "",
        };
        this.referenceInput = React.createRef();
        this.inputFocus = React.createRef();
        this.standard = this.standard.bind(this);
        this.difficult = this.difficult.bind(this);
    }
    standard(){
        this.setState({levelSelected:'STANDARD'});
        this.standardNum = Math.floor(Math.random() *10) + 1 + ""
    }
    difficult(){
        this.setState({levelSelected:'DIFFICULT'});
        this.difficultNum = Math.floor(Math.random() *100) + 1 + ""
    }
    componentDidMount(){
        this.guessNumber.focus();
    }
    clickedbuttonGuess(event){
        event.preventDefault();
        guessedValue = event.target.guessNumber.value ;
        startNewStandardGame = this.standard();
        startNewDifficultGame = this.diffcult();

        if(this.state.levelSelected === 'STANDARD'){
            this.startNewStandardGame.focus()
        }else if(this.state.levelSelected === 'DIFFICULT'){
            this.startNewDifficultGame.focus()
        }
        if(levelSelected === 'Standard'){
            if(guessedValue === startNewStandardGame ){
                this.setState({tooHightooLow:'Good Job!Correct'});
            }if(guessedValue > startNewStandardGame,10){
                this.setState({tooHightooLow:'Wrong!Too High'});
            }else if (guessedValue < startNewStandardGame,10){
                this.setState({tooHightooLow:'Wrong!Too Low'});
            }
            }else if(levelSelected === 'Difficult'){
                if(guessedValue == startNewDifficultGame){
                    this.setState({tooHightooLow:'Good Job!Correct'});
                    }if(guessedValue > startNewDifficultGame,100){
                        this.setState({tooHightooLow:'Wrong!Too High'});
                }else if (guessedValue < startNewDifficultGame,100){
                        this.setState({tooHightooLow:'Wrong!Too Low'});
                    }
                else if(guessedValue !== "") {
                    this.setState({tooHightooLow:"Please Enter a valid Number"})
                };
        };     
    }
render(){
    return(
        <>
        <div className="levelselect">
        <h5 style={{color: "white",fontSize:"17px",marginLeft:'5em'}}>Select Difficulty Level</h5>
        <button id="standard"  onClick ={this.standard}>Standard</button>
        <button id="difficult" onClick ={this.difficult}>Difficult</button>
        </div>
        <div className="levelCard">
        <h3 style={{color: "black",fontSize: '20px',marginLeft: '6em'}}>Selected Level</h3>
        <p style={{color: "red",fontSize: 20,marginLeft:'6.8em'}}>{ this.state.levelSelected }</p>
        &nbsp;
        <form id = "LevelForm">
            <input style={{float:'center'}} id = "Levelsinput" placeholder="Enter Number Here" type="number" ref={(input) => {this.guessNumber = input;}}/>
        </form>
        <p style={{color: "red",marginLeft:'6.5em'}}>"CORRECT GUESS"{this.tooHightooLow}</p>
        &nbsp;&nbsp;
        <button onClick={this.clickedbuttonGuess}  id="guess" type = "submit">Guess</button>
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
