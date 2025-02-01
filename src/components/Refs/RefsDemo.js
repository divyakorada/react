import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      // 1st approach
     this.inputRef = React.createRef()

     // 2nd appraoch
    /*this.cbRef = null
     this.setCbRef = element => {
        this.cbRef = element
     } */
    }

    componentDidMount() {
        // 1st approach
       this.inputRef.current.focus();
        console.log('::::Hi', this.inputRef)
        console.log('::::Hi', this.inputRef.current.focus())

        // 2nd appraoch
        /* if(this.cbRef) {
            this.cbRef.focus()
        } */
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
       <input type='text' ref={this.inputRef}/>
      {/*  <input type='text' ref={this.setCbRef}/> */}
       <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
