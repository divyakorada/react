import React, { useEffect, useRef, useState } from "react";

const InputFocus = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    };
    console.log('useRef parent')

    return(
    <div className="hooks__ctn">
        <input type="text" ref={inputRef} placeholder="click the button to focus"/>
        <button onClick={handleClick}>Focus Input</button>
    </div>
    )
}

//Example 2
function Counter() {
    const [count, setCount] = useState(0)
    const prevCountRef = useRef(0)

    useEffect(() => {
        prevCountRef.current = count;
    }, [count])

    return(
        <div className="hooks__ctn hooks__useRef">
            
            <h5>Current {count}</h5>
            <h5>Previous: {prevCountRef.current}</h5>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          
        </div>
    )
}

// Example 3
function HighlightTextarea() {
    const focusPoint = useRef(null);

    const handleClick = () => {
        focusPoint.current.value = 'The quick brown fox jumps over the lazy dog';
        focusPoint.current.focus();
    }

    return(
        <div className="hooks__ctn hooks__useRef2">
            <div>
                <button onClick={handleClick}>Action</button>
            </div>
            <label>Click on the action button to focus  and populate the text.</label>
            <textarea ref={focusPoint}></textarea>
        </div>
    )
}

//Example 4

 function ButtonClick() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1
        console.log('clicked ' + ref.current + ' times')
    }

    return(
        <div className="hooks__ctn hooks__useRef2">
            <span>{ref.current}  times</span>
            <span>See console log</span>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}


// Class Red
class MyRefClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); // Creating a ref
    }

    componentDidMount() {
            this.inputRef.current.focus(); // Automatically focus the input field when the component mounts
            this.inputRef.current.scrollIntoView({ behavior: "smooth" }); // Scrolls to input smoothly
       
    }
    handleClick = () => {
        alert(this.inputRef.current.value) // // Access input value using ref
    }

    render() {
        return(
        <div class="hooks__ctn hooks__useRef2">
        <input type="text" ref={this.inputRef} placeholder="Type Something..."/>
        <button onClick={this.handleClick}>Show input value</button>
        </div>
        )
    }
}

export {InputFocus, Counter, HighlightTextarea, ButtonClick, MyRefClassComponent}