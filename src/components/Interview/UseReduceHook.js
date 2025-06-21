import React, { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE": 
      return { ...state, age: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const UseReduceHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />
        <input
        type="number"
        placeholder="Age"
        value={state.age}
        onChange={(e) => dispatch({ type: "SET_AGE", payload: e.target.value })} />

        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>

        <h5>Preview: </h5>
        <p>Name: {state.name}</p>
        <p>Age: {state.age}</p>
    </>
  );
};


export default UseReduceHook;