import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         comments: '',
         skill: 'React'
      }
    }

    onChangeUsernameHandler = (event) => {
        console.log('event::::', event)
        this.setState( {
            userName: event.target.value
        })
    }
     
    onChangeCommentHandler = event => {
        this.setState({
            comments: event.target.value
        })
    }

    onChangeSkillHandler = event => {
        this.setState({
            skill: event.target.value
        })
    }

    onHandleSubmit = event => {
       alert(`${this.state.userName} ${this.state.comments} ${this.state.skill}`)
       event.preventDefault()
    }
    
  render() {
    const {userName, comments, skill} = this.state
    return (
      <div  className="containerFtn">
         <h2 className="ctn-head">Form Handling</h2>
        <form onSubmit={this.onHandleSubmit}>
            <div>
                <label>Username: </label>
                <input type='text' value={userName} onChange={this.onChangeUsernameHandler}/>
            </div>
            <div>
                <label>Comments: </label>
                <textarea  value={comments} onChange={this.onChangeCommentHandler}></textarea>
            </div>
            <div>
                <label>Skill: </label>
              <select value={skill} onChange={this.onChangeSkillHandler}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
              </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default FormHandling


// Add the element HTML &
// Assign the component state to the element value &
// assign an onchangeHandler that updates the state