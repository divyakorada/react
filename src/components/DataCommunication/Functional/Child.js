import React, { Fragment } from 'react'

const FunctionalChild = ({headColor, infoColor, onDataChange}) => {

    const handleClick = () => {
        const childData = "I'm from Child";
        onDataChange(childData)
    }
    const childBtn = {
        marginTop: "10px"
    }
    
  return (
    <div>
        <div>
        <hr></hr>
        <h3>Child</h3>
        <div style={{color: headColor}}>Greeks for Greeks</div>
        <div style={{color: infoColor}}>Welcome to React</div>
        </div>
        
      
        <button style={childBtn} onClick={handleClick}>Send data to Parent</button>
    </div>
  )
}

export default FunctionalChild
