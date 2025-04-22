import ClsButton from "./ClassProps";
import FunButton from "./FunctionProps";
import './Props.scss'

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
    <>
    <div className="props-wrapper">
    <h3>Class</h3>
      <div>
      <ClsButton style={color.red} onClick={() => alert("Clicked")}>Click me!</ClsButton>
      {/* <ClsButton style={color.blue} onClick={() => alert("Another one")}>Submit</ClsButton> */}
      </div>

    </div>
  <div className="props-wrapper">
  <div>
  <h3>Functional</h3>
     <FunButton color="pink" btnClick={() => alert('Hi im from function')}>Click me!</FunButton>
     </div>
  </div>
  </>
  );
}

export default CommonProps