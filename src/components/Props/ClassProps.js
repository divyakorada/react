import React, {Component}  from "react";
import './Props.scss'

class ClsButton extends Component {
    constructor() {
        super();
        this.state = {
            name: "Nishanth",
            age: 1,
            array: [1,2,3,4,5,6]
        }
    }
    changeState = () => {
        this.setState({
            age: this.state.age * 2,
            name: 'Uday'
        })

    }
    render() {
        const { children, style, onClick } = this.props
        return(
            <div>
            <button onClick={onClick} style={style}>{children}</button>
            <div className="props-wrapper__inner-ctn">
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.array.map((item) => {
                    return item * 2;
                })}</p>
                <button onClick={this.changeState}>Change State</button>
            </div>
            </div>
        )
    }
}

export default ClsButton