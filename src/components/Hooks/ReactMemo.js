import { useMemo, useState, memo, React } from "react";

const Child = memo(({ userInfo }) => {
  console.log("Child component rendered 2");
  return <p>User: {userInfo.name}</p>;
});
// You need to wrap Child in React.memo so it only re-renders when its props change.
function ReactMemoExample1() {
  const [count, setCount] = useState(0);
  const userInfo = useMemo(
    () => ({
      name: "Geeks for Geeks 2",
    }),
    []
  );

  return (
    <div>
      <p>Count: {count}</p>
      <Child userInfo={userInfo} />
      <button onClick={() => setCount(count + 1)}>Increment count 2</button>
    </div>
  );
}

//Example 2
const MyComponent = memo((props) => {
  console.log("Rendering my Component");
  return (
    <div>
      <h5>Hello, {props.name}</h5>
      <p>{props.message}</p>
    </div>
  );
});

function ReactMemoExample2() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p> React.memo {count}</p>
      <button onClick={handleClick}>Update Count</button>
      <MyComponent name="React" message="welcome to react world"></MyComponent>
    </div>
  );
}

export { ReactMemoExample1, ReactMemoExample2 };

// https://www.geeksforgeeks.org/difference-between-react-memo-and-usememo-in-react/#what-is-reactmemo-
