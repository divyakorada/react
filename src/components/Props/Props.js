import Button from "./ClassProps";
import FunButton from "./FunctionProps";

function CommonProps() {
  return (
    <div className="props-wrapper">
    <h3>Props</h3>
      <Button color="red" onClick={() => alert("Clicked")}>Click me!</Button>
      <Button color="blue" onClick={() => alert("Another one")}>Submit</Button>

     <FunButton color="pink" onClick={() => alert('Hi im from function')}>Click me!</FunButton>
    </div>
  );
}

export default CommonProps