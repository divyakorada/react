import React from 'react'

const inlineStyles = {
    fontSize: '50px',
    color:'blue'
}

function Inline() {
  return (
    <div className="containerFtn">
        <div style={inlineStyles}>
        Inline
        </div>
        <div className='error'>External</div>
    </div>
    
  )
}

export default Inline
