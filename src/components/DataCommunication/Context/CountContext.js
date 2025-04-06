import { createContext, useContext, useState } from "react";

const CountContext = createContext();

// Provider
const CountProvider = ({children, initialValue=111}) => {

    const [count, setCount] = useState(initialValue);

    return(
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

// Consumer
const useCount = () => useContext(CountContext)

export {CountProvider, useCount}