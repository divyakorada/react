import React from "react";

/* function Greet() {
    return <h1>Hello Divya</h1>
} */

// const Greet = () => <h1>Functional component</h1>

// 2nd approach
// export const GreetConst = () => <h1>Hello Divya</h1>


// Props
const Greet = props => {
    console.log('props::::', props)
    return (
        <div className="containerFtn">
            <h2 className="ctn-head">Functional component</h2>
            <h4>Functional {props.name} is from {props.city}</h4>
            {props.children}
        </div>
    )
}

// Destructuring props & state
const PropsDestruct = ({name, city}) => {
   // console.log('props::::', props)
   // const {name, city} = props
    return (
        <div className="containerFtn">
            <h1>Hi this is {name} {city}</h1>
        </div>
    )
}

// export default Greet
export  {Greet, PropsDestruct}

