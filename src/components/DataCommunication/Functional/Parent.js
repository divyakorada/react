import React, { useState } from 'react';
import FunctionalChild from './Child';
import { Text } from './ComponentB';

const FunctionalParent = () => {

const [dataFromChild, setDataFromChild] = useState('Hi Divya')
const message ="Hello from Parent!";
const [parentMessage, setParentMessage] = useState('Hello from Parent!');
const [messageFromChild, setMessageFromChild] = useState('');

const handleCallBack = (childData) => {
    setDataFromChild(childData);
}

const handleMessageChange = (newMessage) => {
  setMessageFromChild(newMessage)
}
  return (
    <div  className='dcw-ctn'>
    <h5>Functional Component</h5>
    <div>
        <h5>Parent</h5>
        <div>Data: {dataFromChild}</div>
        <div>Message from child: {messageFromChild}</div>
      {/* <FunctionalChild headColor="green" infoColor="blue" onDataChange={handleCallBack}></FunctionalChild> */}
      <FunctionalChild headColor="green" infoColor="blue" text={message}  data={parentMessage}
       onDataChange={handleCallBack} onMessageChange={handleMessageChange}></FunctionalChild>
      <Text/>
    </div>
    </div>
  )
}

export default FunctionalParent
// child to parent communication in react functional component AI