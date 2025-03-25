import React from "react";
import FunctionalParent from "./Functional/Parent";
import ClassParent from "./Class/Parent";

const Datacommunication = () => {

  return (
    <div className="data-communication-ctn">
      <h3>Data communication</h3>
      <div className="wrapper">
        <FunctionalParent />
        <ClassParent />
      </div>
    </div>
  );
};

export default Datacommunication;
