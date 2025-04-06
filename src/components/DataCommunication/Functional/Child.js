import React, { Fragment } from 'react'

const FunctionalChild = ({headColor, infoColor, onDataChange}) => {

    const handleClick = () => {
        const childData = "I'm from Child";
        onDataChange(childData)
    }
    const childBtn = {
        margin: "10px 0"
    }
    
  return (
    <div>
        <div>
        <hr></hr>
        <h5>Child</h5>
        <div style={{color: headColor}}>Greeks for Greeks</div>
        <div style={{color: infoColor}}>Welcome to React</div>
        </div>
        <button style={childBtn} onClick={handleClick}>Send data to Parent</button>
    </div>
  )
}

export default FunctionalChild
