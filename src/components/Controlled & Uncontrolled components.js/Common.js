import React from 'react'
import ControlledForm from './Controlled'
import UncontrolledComponent from './Uncontrolled'

const Common = () => {
  return (
    <div className='component-type-wrapper'>
      <ControlledForm/>
      <UncontrolledComponent/>
    </div>
  )
}

export default Common

// https://chatgpt.com/share/67f24908-cc10-8001-857c-0599b77cda62
