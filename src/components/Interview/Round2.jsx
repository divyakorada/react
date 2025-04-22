import { useState } from "react";

const Round2 = () => {
    const fnArray = [
        function fn(a,b) {
            return a + b;
        },
        function fn(a,b) {
            return a - b;
        },
        function fn(a,b) {
            return a * b;
        },
        function fn(a,b) {
            return a / b;
        },
    ]

    const [result, setResult] = useState([]);

 
        let getResult = () => {
          const res = fnArray.map((fn) =>  fn(6, 3));
          setResult(res)
        } 
    
    return(
        <div>
            <p>write a function which takes  an array of multiple functions & execute them one by one, in left to right manner.</p>
            <button onClick={getResult}>Click me!</button>
            <p>{result.join(', ')}</p>
            </div>
    )
}

export default Round2;