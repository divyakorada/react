import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Divya'
      }
    //  console.log('Lifecylce A constructor')
    }

    // Mouting/Updating life cycle method
    static getDerivedStateFromProps(props, state) {
      //  console.log('Lifecylce A getDerivedStateFromProps')
        return null
    }


    // Mouting life cycle method
    componentDidMount() {
      //  console.log('Lifecylce A componentDidMount')
    }


    // Updating life cycle methods
    shouldComponentUpdate() {
    //    console.log('Lifecylce A should component upate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
     //   console.log('Lifecylce A get Snapshot Before Update')
        return null
    }    
    componentDidUpdate() {
     //   console.log('Lifecylce A Component did update')
    }

    changeState = () => {
     //   console.log('hi')
        this.setState = ({
            message: 'Codevolution'
        })
    }



  render() {
   // console.log('Lifecylce A render')
    return (
        <div className="containerFtn">
             <h2 className="ctn-head">Lifecylce Methods executing in Mounting Stage</h2>
            <div>Life cycle A</div>
            <button onClick={this.changeState}>Change state</button>
            <LifeCycleB/>
        </div>
        
    )
  }
}

export default LifeCycleA
