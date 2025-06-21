import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

const FunctionalChild = (props) => {

    const [childMessage, setChildMessage] = useState('')

    const handleChange = (event) => {
      const newMessage = event.target.value;
      setChildMessage(newMessage)
      props.onMessageChange(newMessage);
    }

    const handleClick = () => {
        const childData = "I'm from Child";
        props.onDataChange(childData)
    }
    const childBtn = {
        margin: "10px 0"
    }
    
  return (
    <div>
        <div>
        <hr></hr>
        <h5>Child</h5>
        <div> Message from Parent: {props.data}</div>
        <div style={{color: props.headColor}}>Greeks for Greeks</div>
        <div style={{color: props.infoColor}}>Welcome to React</div>
        <div>{props.text}</div>
        </div>
        <button style={childBtn} onClick={handleClick}>Send data to Parent</button>
        <input type='text' value={childMessage} onChange={handleChange} placeholder='Type something to send parent' />
    </div>
  )
}

FunctionalChild.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.number
}
FunctionalChild.defaultProps = {
  data: 25
}

export default FunctionalChild
