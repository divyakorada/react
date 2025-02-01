import React from 'react'

function Columns() {
    const items = [
        {id:1, Title: 'Title 1'},
        {id:2, Title: 'Title 2'}
    ]
  return (
    <> {/* Fragment shorthand */}
        {
            items.map(item => (
                <React.Fragment key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.Title}</td>
                </React.Fragment>
            ))
        }
        <td>Hello</td>
        <td>Divya</td>
    </>
  )
}

export default Columns
