import React, { Component } from "react";

export default class ShowUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
      //  console.log("json", json);
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { items, DataisLoaded } = this.state;
    const divStyles = {
      height: "400px",
      overflow: "auto",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5ebeb",
    };
   

    if (!DataisLoaded) {
      return (
        <div style={divStyles}>
          <h3>Please wait some time...</h3>
        </div>
      );
    }

    return (
      <div className="main-Wrapper-Api">
        <h5>Fetch data from an api in react</h5>

          <ul className="list-group divScroll">
            {items?.map((item) => (
              <li key={item.id} className="list-group-item">
                <div>
                  <strong>{"User name:"}</strong>
                  {item.username},
                </div>
                <div>Full_Name: {item.name}</div>
                <div>User_Email: {item.email}</div>
              </li>
            ))}
          </ul>
       
      </div>
    );
  }
}

//https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/

//https://www.geeksforgeeks.org/different-ways-to-fetch-data-using-api-in-react/
