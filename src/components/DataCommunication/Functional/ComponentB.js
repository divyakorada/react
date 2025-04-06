import {useCount} from '../Context/CountContext'

 const Text = () => {
    const {count} = useCount();
    return(
        <>
        <p>The count is {count}</p>
        </>
    )
}

// Props Drilling 
const Txt = ({count}) => {
    return(
        <>
        <p>The count is {count}</p>
        </>
    )
}
//  Props Drilling 

export { Text, Txt }

