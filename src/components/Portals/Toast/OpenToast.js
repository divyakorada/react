import { useState } from "react"
import Toast from "./Toast"

const OpenToast = () => {

    const [toastMessage, SetToastMessage] = useState(null)

    const showToast = () => {
        SetToastMessage('This is a toast notification!')
        setTimeout(() => SetToastMessage(null), 3000) // Auto-dismiss after 3 seconds
    }
    return(
        <div>
            <button onClick={showToast}>Show Toast</button>
            {toastMessage && 
            (<Toast message={toastMessage} onClose={() => SetToastMessage(null)} />)}
        </div>
    
    )
}

export default OpenToast