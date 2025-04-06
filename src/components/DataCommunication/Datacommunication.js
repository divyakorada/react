import React, { useState } from "react";
import FunctionalParent from "./Functional/Parent";
import ClassParent from "./Class/Parent";
import { Btn, Button } from "./Functional/ComponentA";
import { Text } from "./Functional/ComponentB";

const Datacommunication = () => {

  const [count, setCount] = useState(0);
  
  const onButtonClick = () => {
    setCount(count + 1)
}

  return (
    <div className="data-communication-ctn">
      <h3>Data communication</h3>
      <div className="wrapper">
        <FunctionalParent />
        <ClassParent />
        <div className='dcw-ctn'>
        <h5>Slibling communication</h5>
          <div className="dcw-sibling-ctn">
            <h5>Component A</h5>
            <Button/>  {/* ComponentA */} 
          </div>
          <div className="dcw-sibling-ctn">
            <h5>Component B</h5>
            <Text/>    {/* ComponentB */}
          </div>
        </div>

        {/* ------------------------- Props Drilling-------------------- */}
        <div className='dcw-ctn'>
        <h5>Props Drilling</h5>
          <Btn count={count} onButtonClick={onButtonClick}/>
        </div>
        {/* ------------------------- Props Drilling-------------------- */}

      </div>
    </div>
  );
};

export default Datacommunication;
