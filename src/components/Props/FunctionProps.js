import React from "react";

function FunButton({ children, color, onClick }) {
    return(
        <>
        <button onClick={onClick} className={`Btn ${color}`}>children</button>
        </>
    )
}

export default FunButton