import React from "react"

class Levels extends React.Component{
render(){
    return(
        <>
        <h4>Select Difficulty Level</h4>
        <button id="standard" type  = "submit">Standard</button>
        <button id="difficult" type = "submit">Difficult</button>
        </>
    )
}
}
export default Levels
