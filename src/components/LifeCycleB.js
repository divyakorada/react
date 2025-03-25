import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Divya'
      }
    //  console.log('Lifecylce B constructor')
    }

    static getDerivedStateFromProps(props, state) {
      //  console.log('Lifecylce B getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
     //   console.log('Lifecylce B componentDidMount')
    }

    // Updating life cycle methods
       shouldComponentUpdate() {
      //  console.log('Lifecylce B should component upate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
       // console.log('Lifecylce B get Snapshot Before Update')
        return null
    }    
    componentDidUpdate() {
      //  console.log('Lifecylce B Component did update')
    }
    
  render() {
  //  console.log('Lifecylce B render')
    return (
        <div>
            <div>Life cycle B</div>
        </div>
        
    )
  }
}

export default LifeCycleB
