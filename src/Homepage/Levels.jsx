import React from "react"

class Levels extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            levelSelected: "",             
            input: [],
            tooHightooLow: "",
            standardNum: Math.floor (Math.random() *10),
            difficultNum: Math.floor (Math.random() *100),
        };
        this.standard = this.standard.bind(this);
        this.difficult = this.difficult.bind(this);
        this.guessNumber = this.guessNumber.bind(this);
        this.clickedbuttonGuess = this.clickedbuttonGuess.bind(this);
        this.Initial = this.Initial.bind(this);
    }
    Initial(){
        this.setState({
            levelSelected: "",             
            input: [],
            tooHightooLow:"" ,
            guessNumber: [],
            standardNum: Math.floor (Math.random() *10),
            difficultNum: Math.floor (Math.random() *100),     
    })
    }
    standard(e){
        e.preventDefault();
        this.setState({
            levelSelected:'Standard',
            standardNum: Math.floor (Math.random() *10),
        });
    }
    difficult(e){
        e.preventDefault();
        this.setState({levelSelected:'Difficult'});
    }
    componentDidUpdate(){
       
    }
    componentDidMount(){
    
    }
    guessNumber(e){
        e.preventDefault();
        this.setState({ input:e.target.value})
    }
clickedbuttonGuess(e){
    e.preventDefault(); 
    let startNewStandardGame = this.state.standardNum;
    let startNewDifficultGame = this.state.difficultNum;
    let guessedValue = this.state.input; 

    if(this.standard){   
        if(guessedValue == startNewStandardGame){
            this.setState({tooHightooLow:'Good Job!Correct'});
        }if(guessedValue < startNewStandardGame){
                this.setState({tooHightooLow:'Wrong!Too Low'});
        }if(guessedValue  > startNewStandardGame){
                this.setState({tooHightooLow:'Wrong!Too high'});
        }
    }
    else if(this.difficult){
        if(guessedValue  == startNewDifficultGame){
            this.setState({tooHightooLow:'Good Job!Correct'});
        }if(guessedValue  > startNewDifficultGame){
            this.setState({tooHightooLow:'Wrong!too High'});
        }if(guessedValue  < startNewDifficultGame){
            this.setState({tooHightooLow:'Wrong!Too Low'});
        }
    }
}
render(){
    return(
        <>
        <div className="levelselect">
        <h5 style={{color: "white",fontSize:"17px",marginLeft:'4.5em'}}>Select Difficulty Level</h5>
        <button id="standard"  onClick ={this.standard}>Standard</button>
        <button id="difficult" onClick ={this.difficult}>Difficult</button>
        </div>
        <div className="levelCard">
        <h3 style={{color: "black",fontSize: '20px',marginLeft: '5.1em',paddingTop: '2em'}}>Selected Level</h3>
        &nbsp;
        <p style={{color: "red",fontSize: 20,marginLeft:'6.3em'}}>{ this.state.levelSelected }</p>
        &nbsp;
        <form id = "LevelForm">
            <input style={{float:'center',fontSize:14}} value={this.state.input}  id = "Levelsinput" placeholder="Enter Number" type="number" min="0" max="100" onChange = {this.guessNumber} ref={this.inputFocus}/>
        </form>
        &nbsp;
        <p style={{color: "red",fontSize: 20, marginLeft:'4.9em'}}>{this.state.tooHightooLow}</p>
        &nbsp;
        &nbsp;
        <button onClick={this.clickedbuttonGuess}  id="guess" type = "submit">Guess</button>
        &nbsp;
        <div className="playButtons">
        <button id="playAgain"  onClick={this.Initial} type = "submit">Play Again</button>
        <button id="login" type = "submit">Log In</button>
        </div>
        </div>
        </>
    )
}
}
export default Levels
