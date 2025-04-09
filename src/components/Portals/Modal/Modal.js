import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, children }) => {

    const portal = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'purple',
        padding: '20px',
        color: '#fff'
    }

    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div style={portal}> {children} </div>,
        document.body 
    )
}

export default Modal