import React from 'react'

function ChildComponent(props) {
    console.log('child::::', props);
  return (
    <div>
        {/*<button onClick={props.greetHandler}>Click me</button> */}
        <button onClick={() => props.greetHandler(' I am Child message')}>Click me</button>
    </div>
  )
}

export default ChildComponent
