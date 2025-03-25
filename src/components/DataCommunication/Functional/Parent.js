import React, { useState } from 'react';
import FunctionalChild from './Child';

const FunctionalParent = () => {

const [dataFromChild, setDataFromChild] = useState('Hi Divya')

const handleCallBack = (childData) => {
    setDataFromChild(childData);
}
const wrapper = {
    border: "1px solid #b1b1b1",
    width: "30%",
    margin: "0 20px",
    borderRadius: "5px",
    padding: "20px"
}

  return (
    <div  style={wrapper}>
    <h4>Functional Component</h4>
    <div>
        <h5>Parent</h5>
        <div>Data: {dataFromChild}</div>
      <FunctionalChild headColor="green" infoColor="blue" onDataChange={handleCallBack}></FunctionalChild>
      
    </div>
    </div>
  )
}

export default FunctionalParent
