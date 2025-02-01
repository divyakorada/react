import React from 'react'

function ListRenderingMarkup({x,y}) {
    console.log("pp::::", x)
    console.log("y::::", y)
  return (
    <li>I am {x.name}. I know {x.skill} & I am {x.age} old.</li>
  )
}

export default ListRenderingMarkup
