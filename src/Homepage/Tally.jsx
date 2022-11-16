import React from "react"

class Tally extends React.Component{
    render(){
        return(
            <>
            <h4>Game Tally</h4>
            <form id = "LevelForm">
            <label for="won">Games Won</label>
            <input id = "Tally"/>
             </form>
             <br/>
             <form id = "LevelForm">
             <label for="won">Games Lost</label>
            <input id = "Tally"/>
             </form>
             <form id = "LevelForm">
             <label for="gamesplayed">Total games Played</label>
            <input/>
             </form>
            </>
        )
    }
}
export default Tally
