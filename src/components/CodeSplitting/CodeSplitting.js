import React, { useState } from 'react'

const CodeSplitting = () => {

    const [sum, setSum] = useState(0)

   // let sum = 0;
  //Dynamic import
  const handleAddition = () => {
    import('./Math')
    .then((add) => {
        setSum(add.default(5,6))
          console.log(sum);
    });
  }
 
  return (
    <div>
        <p>{sum}</p>
        <button onClick={handleAddition}>Clime me!</button>
    </div>
  )
}

export default CodeSplitting
