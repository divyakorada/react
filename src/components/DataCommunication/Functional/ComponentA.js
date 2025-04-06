import { Text, Txt } from "./ComponentB"
import {useCount} from "../Context/CountContext"

 const Button = () => {
   console.log('value', useCount())
    const {count, setCount} = useCount();

    const onButtonClick = () => {
        setCount(count + 1)
    }

    return(
        <>
        <button onClick={onButtonClick}>Click to Increment</button>
        </>
    )
}

//  Props Drilling 
 const Btn = ({count, onButtonClick}) => {
    console.log('silbling', {count, onButtonClick})
   
    return(
        <>
        <button onClick={onButtonClick}>Click to Increment</button>
        <Txt count={count}/>
        </>
    )
}
// Props Drilling

export { Button, Btn }