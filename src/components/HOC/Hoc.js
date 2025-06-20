import { useEffect, useState } from "react";

/*function withBoarder(WrappedComponent) {
  return function(props) {
    return (
      <div style={{ border: "2px solid blue", padding: "10px", borderRadius: "5px" }}>
      <WrappedComponent {...props}/>
      </div>
    ) 
  }
}*/

// // Higher-Order Component (HOC)
const withBorder = (WrappedComponent) => {

    return (props) => { 
      console.log("Props in HOC:", props); // Log props here
      return (
        <div className="">
        <h3>HOC</h3>
        <div style={{ border: "2px solid blue", padding: "10px", borderRadius: "5px" }}>
          <WrappedComponent {...props} hi='im divya'/>
        </div>
        </div>
    )};
  };
  
  // Regular Component
  const Message = ({ text, showName }) => {
   // console.log("Props in Message:", { text, showName });
    return <span>{text} {showName}</span>
};
  
  // Enhance the component using HOC
 const BorderedMessage = withBorder(Message);

/*/---------------------------------HOC-------------------------------/*/

const withExtraProp = (WrappedComponent) => {
    return (props) => (
      <WrappedComponent {...props} extraProp="This is an extra prop" />
    );
  };
  
  const MyComponent = (props) => {
 //   console.log("props::::", props);
    return (
      <div>
        {props.extraProp && <p>{props.extraProp}</p>}
      </div>
    )
  };
  
  const EnhancedComponent  = withExtraProp(MyComponent);

  const FinalComponent = () => {
    return(
    <div className="hoc-wrapper">
      <BorderedMessage text="Hello, this is inside a border!" showName="Name"/>
      <EnhancedComponent />
    </div>
    ) 
  }

// /Show API response
  function HigherOrder (title,Component, request) {
    return function HOC() {
      const [data, setData] = useState([]);

      const getData = async () => {
        let data = await fetch(`https://jsonplaceholder.typicode.com/${request}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err;
        });
        console.log('hi', data)
        setData(await data.json())
      };

      useEffect(() => {
        getData()
      }, [])

      return (
        <div>
          <h2>{title}</h2>
          <Component x={data}/>
        </div>
      )

    }
  }

  export  {FinalComponent, HigherOrder};

// https://chatgpt.com/share/67b1d0de-f308-8001-accb-11dc56c5f00f
// https://chatgpt.com/share/67e2e8f5-c84c-8001-be82-ad23c9347018

// https://www.geeksforgeeks.org/how-to-use-higher-order-components-in-react/
