import React, {Component}  from "react";

class Button extends Component {
    render() {
        const { children, color, onClick } = this.props
        return(
            <button onClick={onClick} className={`Btn ${color}`}>children</button>
        )
    }
}

export default Button