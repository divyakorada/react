import React, { useState } from "react"

const Key = () => {
    const [items, setItems] = useState(['Item 1, Item 2, Item 3'])

    const updateOrder = () => {
        setItems(['item3', 'Item1', 'Item2'])
    }

    return(
        <div>
            <ul>
                {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <button onClick={updateOrder}>updateOrder</button>
        </div>
    )
}

export default Key