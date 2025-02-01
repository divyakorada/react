import React, {Component} from "react";


/* class Welcome extends Component {
    render() {
        return <h1>Class Component</h1>
    }
} */

// Props
class Welcome extends Component {
    render() {
        return (
            <div className="containerFtn">
                 <h2 className="ctn-head">Class component</h2>
                <h4>Class Component {this.props.name} is from {this.props.city}</h4>
                {this.props.children}
            </div>
        )
       
    }
}


/* // Destructing in class
class Welcome extends Component {
    render() {
        const {name, city} = this.props;
        return (
            <div className="containerFtn">
                 <h2 className="ctn-head">Class component</h2>
                <h4>Class Component {name} is from {city}</h4>
            </div>
        )
       
    }
} */

export default Welcome;