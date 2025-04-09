import React, {useRef} from "react";


function UncontrolledComponent() {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted name " + inputRef.current.value)
    }

    return(
        <div  className="uncontrolled-wrapper">
            <h3>Uncontrolled Component</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent