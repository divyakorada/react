import react, { useState } from "react";
import Modal from "./Modal";

const OpenModal = () => {
    const [isModalOpen, setisModalOpen] = useState(false)

    return(
        <div>
            <h3>Welcome to react portal</h3>
            <button onClick={() => setisModalOpen(true)}>Open Modal</button>
            <Modal isOpen={isModalOpen}><h3>This is a Modal</h3></Modal>
            <button onClick={() => setisModalOpen(false)}>close Modal</button>
        </div>
    
    )  

}

export default OpenModal