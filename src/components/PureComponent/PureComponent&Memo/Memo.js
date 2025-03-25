import React from 'react'

function Memo({message}) {
   // console.log('*rendering Memo component')
  return (
    <div>
     Memo functional Component {message}
    </div>
  )
}

export default React.memo(Memo)

//  React.memo
