import React from 'react'
import './externalStyleSheet.css'

function Stylesheet(props) {
console.log('style', props)
const setColorName = props.color ? 'primary' : ''
  return (
    <div className="containerFtn">
        <h2 className="ctn-head">Styles</h2>
        <div className={`${setColorName} font-xl`}>Style sheet</div>
    </div>
  )
}

export default Stylesheet
