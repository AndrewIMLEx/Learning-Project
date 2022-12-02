import React from "react"

class Tally extends React.Component{
    render(){
        return(
            <>
            <h4 style={{marginLeft:"4em"}}>Game Tally</h4>
            <form id = "LevelForm">
            <span><label id = "won-label" htmlFor="won">Games Won</label>
            <label id = "Tally"/></span>
            <br/><br/>
            <span><label id = "won-label" htmlFor="lost">Games Lost</label>
            &nbsp;<label id = "Tally"/></span>
             </form>
             <form id = "Gamesplayed">
             <label id ="played" htmlFor="gamesplayed" style={{marginLeft:"2em",padding:"-3em",fontSize:"14px"}}>Total Games Played</label>
            <label id ="plays"/>
            </form>
            </>
        )
    }
}
export default Tally
