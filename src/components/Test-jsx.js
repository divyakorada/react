import React from "react";

const Hello = () => {
    /*  return(
        <div className="containerFtn">
             <h2 className="ctn-head">JSX</h2>
            <h4>Hello JSX</h4>
        </div>
    ) /*/
     return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Divya')
        ) 
}

export default Hello;

