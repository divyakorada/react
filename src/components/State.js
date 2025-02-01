import React, {Component} from "react";


class ExplainState extends Component {

        constructor() {
            super()
            this.state = {
                message: 'Welcome to State'
            }
        }

        changeMessage() {
            this.setState({
                message: 'Thank you for subscribing state'
            })
        }


    render() {
        return (
            <div className="state-wrapper">
                <h2 className="ctn-head">State:</h2>
                <h3 className="state-container">{this.state.message}</h3>
                <button className="click-btn" onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default ExplainState


