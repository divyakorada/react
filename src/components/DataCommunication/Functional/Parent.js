import React, { useState } from 'react';
import FunctionalChild from './Child';
import { Text } from './ComponentB';

const FunctionalParent = () => {

const [dataFromChild, setDataFromChild] = useState('Hi Divya')

const handleCallBack = (childData) => {
    setDataFromChild(childData);
}
  return (
    <div  className='dcw-ctn'>
    <h5>Functional Component</h5>
    <div>
        <h5>Parent</h5>
        <div>Data: {dataFromChild}</div>
      <FunctionalChild headColor="green" infoColor="blue" onDataChange={handleCallBack}></FunctionalChild>
      <Text/>
    </div>
    </div>
  )
}

export default FunctionalParent
