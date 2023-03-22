import React from "react"

class Levels extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            levelSelected: "",             
            input: [],
            tooHightooLow: "",
            standardNum: [],
            difficultNum: [],
            gameCount: 1,   
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
            gameCount:this.state.gameCount + 1
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
        this.setState({
            levelSelected:'Difficult',
            difficultNum: Math.floor (Math.random() *100), 
        });
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.setState({ 
                standardNum: Math.floor (Math.random() *10),
                difficultNum: Math.floor (Math.random() *100),
        });
          }, 1000);
          
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
    let counts = this.state.gameCount

    console.log(`selected level is ${this.state.levelSelected}`);
    console.log(`Input number is ${guessedValue}`);
    console.log(`standard is ${startNewStandardGame}`);
    console.log(`difficult is ${startNewDifficultGame}`);

    if(guessedValue !== ""){
        this.setState((prevState) => ({
            counts: prevState.gameCount + 1,
            levelSelected: "",
            input:[],
        }))}
    if(guessedValue == "" || guessedValue < 0 || guessedValue > 100){
        this.setState({tooHightooLow:"Enter valid number"});
    }
    if(counts > 3){
        this.setState({tooHightooLow: "Game Over!!!!!",input:[],levelSelected:""});
    }
    else if(this.standard){
        if(guessedValue == ""){
            this.setState({tooHightooLow:"Enter valid number"});}
        else if(guessedValue == startNewStandardGame){
            this.setState({tooHightooLow:'Good Job!Correct'});
        }else if(guessedValue < startNewStandardGame){
                this.setState({tooHightooLow:'Wrong!Too Low'});
        }else if(guessedValue  > startNewStandardGame){
                this.setState({tooHightooLow:'Wrong!Too high'});
        }
    }
    else if(this.difficult){
        if(guessedValue == ""){
            this.setState({tooHightooLow:"Enter valid number"});
        }else if(guessedValue  == startNewDifficultGame){
            this.setState({tooHightooLow:'Good Job!Correct'});
        }else if(guessedValue  < startNewDifficultGame){
            this.setState({tooHightooLow:'Wrong!Too Low'});
        }else if(guessedValue  > startNewDifficultGame){
            this.setState({tooHightooLow:'Wrong!too High'});
        }
    }
}
render(){
    return(
        <>
        <div className="levelselect">
        <h5 style={{color: "white",fontWeight:"bolder",fontSize: 15,marginLeft:'2.5em',paddingBottom:'0.5em'}}>Select Difficulty Level</h5>
        <button id="standard"  onClick ={this.standard}>Standard</button>
        <button id="difficult" onClick ={this.difficult}>Difficult</button>
        </div>
        <div className="levelCard">
        <h3 style={{color: "black",fontSize: 16 ,marginLeft: '5.5em',paddingTop: '1em'}}>Selected Level</h3>
        &nbsp;
        <div id="levelselectedcard" className="selectedlevelCard">
        <p style={{color: "red",fontSize: 14,marginLeft:'7.5em'}}>{ this.state.levelSelected }</p>
        </div>
        &nbsp;
        <form id = "LevelForm">
            <input style={{float:'center',fontSize:11}}  value={this.state.input}  id = "Levelsinput" placeholder="Enter Number" type="number" min="0" max="100" onChange = {this.guessNumber} ref={this.inputFocus}/>
        </form>
        <div id ="toohightoolowcard" className="highlowoutputcard">
        <p style={{color: "red",fontSize: 14, marginLeft:'6em'}}>{this.state.tooHightooLow}</p>
        </div>
        &nbsp;
        &nbsp;
        <button onClick={this.clickedbuttonGuess}  id="guess" type = "submit">Guess</button>
        &nbsp;
        <div className="playButtons">
        <button id="playAgain" onClick={this.Initial} type = "submit">Play Again</button>
        <button id="login" type = "submit">Log In</button>
        </div>
        </div>
        </>
    )
}
}
export default Levels

