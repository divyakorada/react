import React, {Component}  from "react";

class ClsButton extends Component {
    render() {
        const { children, style, onClick } = this.props
        return(
            <button onClick={onClick} style={style}>{children}</button>
        )
    }
}

export default ClsButton