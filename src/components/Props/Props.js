import ClsButton from "./ClassProps";
import FunButton from "./FunctionProps";

function CommonProps() {
  const color = {
    red: {
        background: 'red',
        color : "#fff",
    },
    blue: {
        background: 'blue',
        color : "#fff",
    }
}
  return (
    <div className="props-wrapper">
    <h3>Props</h3>
      <ClsButton style={color.red} onClick={() => alert("Clicked")}>Click me!</ClsButton>
      <ClsButton style={color.blue} onClick={() => alert("Another one")}>Submit</ClsButton>

     <FunButton color="pink" onClick={() => alert('Hi im from function')}>Click me!</FunButton>
    </div>
  );
}

export default CommonProps