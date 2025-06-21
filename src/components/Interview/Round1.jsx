import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDebounce } from "../Hooks/CustomHook";
const pinAPI = `https://api.postalpincode.in/pincode/`;


const Debounce = () => {
    const [pin, setPin] = useState("");
    const [postOffices, setPostOffices] = useState([]); // response array

    useEffect(() => {
        const debouncing = setTimeout(() => {
            axios.get(pinAPI + pin)
            .then((res) => {
                console.log(res.data[0].PostOffice)
                setPostOffices(res.data[0].PostOffice || []);
            })
            .catch((err) => {
                console.log(err)
            })
        }, 1000);

        return () => {
            clearTimeout(debouncing)
        };

    }, [pin])

    return(
        <div>
            <input onChange={(event) => setPin(event.target.value)} placeholder="Enter your pin code" />
            {postOffices?.map((e, index) => (
                    <p key={index}>{e.Name}</p> // Use correct field like e.Name or e.BranchType
            ))}
            <DebounceJS />
            <DebounceReact />
            <CustomeHookDebounce />
        </div>
    )
}


export const DebounceJS = () => {
    const inputRef = useRef(null);

    function outcome(data) {
    console.log('data', data);
    }

    function hofDebounce(func, delay) {
        let timer;
        return function(...args) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
            return func(args)
            }, delay)
        }
    }

    useEffect(() => {
        const ele = inputRef.current;
        const result = hofDebounce(outcome, 1000);

        const handleKeyUp  = (e) => {
            result(e.target.value)
        };


        if(ele) {
        ele.addEventListener("keyup", handleKeyUp)
        }

        return() => {
            if(ele) {
                ele.removeEventListener("keyup", handleKeyUp )
            }
        }
        
    }, [])
   
    return(
        <>
          <input type="text" ref={inputRef} placeholder="Debounced JS Input"/>
        </>
    )

}

export const DebounceReact = () => {
    const [inputValue, setInputValue] = useState("");
    const [debounceValue, setDebounceValue] = useState("Hello");

    useEffect(() => {
        const timer = setTimeout(() => {
        setDebounceValue(inputValue);
        }, 2000);

        return () => clearTimeout(timer);
    }, [inputValue]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter Text"/>
        <p>Hi: {debounceValue}</p>
        </>
    )
}

export const CustomeHookDebounce = () => {
     const [searchTerm, setSearchTerm] = useState("");
     const debouncedSearchTerm = useDebounce(searchTerm, 2000)

    useEffect(() => {
        if (debouncedSearchTerm) {
        console.log("Performing search for:", debouncedSearchTerm);
        }
  }, [debouncedSearchTerm]);

  return(
    <>
     <input type="text" onChange={(e) =>  setSearchTerm(e.target.value)} value={searchTerm} placeholder="type somthing"/>
     <p>custom Hook{debouncedSearchTerm}</p>
    </>
  )
}

export default Debounce;