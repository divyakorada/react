import React, { useState } from "react";
import './Props.scss'

function FunButton({ children, color, btnClick }) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [array, setArray] = useState([
        {
            name: "Nishant",
            age: 30
        },
        {
            name: "Divya",
            age: 40
        }
    ]);
    

    const handleClick = () => {
        setCount(count + 1);
        setIsVisible(!isVisible);
        setName("Nishanth");
    }

    return(
        <>
        <button onClick={btnClick} className={`Btn ${color}`}>{children}</button>
        <div className="props-wrapper__inner-ctn">
                <p>{count}</p>
                {isVisible ? <h5>isVisible</h5> : <h5>Not Visible</h5>}
                <p>{name}</p>
                {array.map((item, index) => (
                    <p key={index}> Age: {item.age}</p>
                ))}
                  <button onClick={handleClick}>Click me</button>
            </div>
        </>
    )
}

export default FunButton