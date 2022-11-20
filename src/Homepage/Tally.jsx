import React from "react"

class Tally extends React.Component{
    render(){
        return(
            <>
            <h4 style={{marginLeft:"4em"}}>Game Tally</h4>
            <form id = "LevelForm">
            <span><label id = "won-label" for="won">Games Won</label>
            <input id = "Tally"/></span>
            <br/><br/>
            <span><label id = "won-label" for="lost">Games Lost</label>
             <input id = "Tally"/></span>
             </form>
             <form id = "Gamesplayed">
             <label id ="played" for="gamesplayed" style={{marginLeft:"2em"}}>Total Games Played</label>
            <input id ="plays"/>
            </form>
            </>
        )
    }
}
export default Tally
