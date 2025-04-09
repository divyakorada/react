import React, { useState } from "react";

function ControlledForm() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted name " + name)
    };


    return(
        <div className="controlled-wrapper">
            <h3>Controlled Component</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange}/>
            <button type="submit">submit</button>
        </form>
        </div>
    
    )
}

export default ControlledForm