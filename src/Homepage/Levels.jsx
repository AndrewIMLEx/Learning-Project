import React, { Component} from "react"

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
        this.standard = this.standard.bind(this);
        this.difficult = this.difficult.bind(this);
        this.guessNumber = this.guessNumber.bind(this);
        this.clickedbuttonGuess = this.clickedbuttonGuess.bind(this)
    }
    standard(){
        this.setState({levelSelected:'STANDARD'});
        this.setState({standardNum: Math.floor(Math.random() *10) + 1 + ""});
        this.setState({tooHightooLow:''})
    }
    difficult(){
        this.setState({levelSelected:'DIFFICULT'});
        this.setState({difficultNum : Math.floor(Math.random() *100) + 1 + ""});
        this.setState({tooHightooLow:''})
    }
    componentDidMount(){
        console.log(this.state.standardNum);
        console.log(this.state.difficultNum)
    }
    guessNumber(e){
        e.preventDefault();
        this.setState({ input:e.target.value})
    }
    clickedbuttonGuess(e){
        e.preventDefault();
        console.log(this.state.input)
       let startNewStandardGame = standard;
         let startNewDifficultGame = difficult;
         let guessedValue = this.guessNumber;
        if(this.levelSelected === 'STANDARD'){
            if(guessedValue === startNewStandardGame ){
                this.setState({tooHightooLow:'Good Job!Correct'});
            }if(guessedValue > startNewStandardGame,10){
                this.setState({tooHightooLow:'Wrong!Too High'});
            }else if (guessedValue < startNewStandardGame,10){
                this.setState({tooHightooLow:'Wrong!Too Low'});
            }
            }else if(this.levelSelected === 'DIFFICULT'){
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
        &nbsp;
        <p style={{color: "red",fontSize: 20,marginLeft:'6.8em'}}>{ this.state.levelSelected }</p>
        &nbsp;
        <form id = "LevelForm">
            <input style={{float:'center'}} id = "Levelsinput" placeholder="Enter Number Here" type="number" onChange = {this.guessNumber} ref={this.inputFocus}/>
        </form>
        <p style={{color: "red",marginLeft:'6.5em'}}>{this.state.tooHightooLow}</p>
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
