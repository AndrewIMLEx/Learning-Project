import React from "react"

class Tally extends React.Component{
    render(){
        return(
            <>
            <div className="tallycard">
            <h4 style={{marginLeft:"2.8em",paddingBottom:"2em"}}>Game Tally</h4>
            <form id = "LevelForm">
            <span><label id = "won-label" htmlFor="won">Games Won</label>
            <label id = "Tally"/></span>
            &nbsp;&nbsp;
            <span><label id = "won-label" htmlFor="lost">Games Lost</label>
            &nbsp;<label id = "Tally"/></span>
             </form>
             <form id = "Gamesplayed">
             <label id ="played" htmlFor="gamesplayed" style={{padding:"-4em", marginLeft:"3.4em",display: "inline"}}>Total Games Played</label>
            <label id ="plays"/>
            </form>
            </div>
            </>
        )
    }
}
export default Tally
