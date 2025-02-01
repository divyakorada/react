import React from 'react'
import ListRenderingMarkup from './ListRenderingMarkup'

function ListRendering() {
    const persons = [
      {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'rosey',
      age: 19,
      skill: 'Java'
    },
    {
        id: 3,
      name: 'Diana',
      age: 34,
      skill: 'Angular'
    },
    {
        id: 4,
      name: 'ram',
      age: 28,
      skill: 'Vue'
    },
    {
        id: 5,
      name: 'firoz',
      age: 39,
      skill: 'JS'
    },
  ]

  const names = ['Bruce', 'Diana', 'Clark']
  const nameList = names.map((name, index) => <div key={index}>{index} {name}</div>)

 // const personList = persons.map(person => <h2>I am {person.name}. I know {person.skill} & I am {person.age} old.</h2>)
  const personList = persons.map(person => <ListRenderingMarkup key={person.id} y={'hello'} x={person}/>)

  return( 
  <div className="containerFtn">
     <h2 className="ctn-head">List Rendering:</h2>
     <ul className="person-list-ctn">{ personList}</ul>
     <h2 className="ctn-head">Index as key:</h2>
     <div>{nameList}</div>
  </div>
)
}

export default ListRendering







  /*   let y = '';
    for(let x of names) {
      console.log('x::::', x)
      y +=  ' ' + x
      console.log('y::::', y)
    }
    <div>{y}</div> */