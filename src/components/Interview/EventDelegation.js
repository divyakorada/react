const ListWithDelegation = () => {
      const items = ['Apple', 'Banana', 'Cherry'];

      const handleClick = (event) => {
        if(event.target.tagName === "LI") {
            const itemValue = event.target.textContent;
            alert(`You clicked on Item ${itemValue}`)
        }
      }
    return(
        <>
        <ul onClick={handleClick}>
            {items.map(e => (
                <li key={e.index}>{e}</li>
            ))}
        </ul>
        </>
    )
}

export default ListWithDelegation