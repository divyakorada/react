import { useMemo, useState, memo, React, useCallback } from "react";

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

//Example 3
const ListItem = memo(({ item, onClick }) => {
  return (
    <li onClick={() => onClick(item.id)} style={{ cursor: "pointer" }}>
      {item.text}
    </li>
  );
});

function ReactMemoExampleItemList() {
  const [Items, setItems] = useState([
    { id: 1, text: "🍎 Apple" },
    { id: 2, text: "🍌 Banana" },
    { id: 3, text: "🍇 Grape" },
  ]);

  const updateItem = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: item.text + " (clicked)" } : item
      )
    );
  }, []);

  return (
    <ul>
      {Items &&
        Items.map((item) => (
          <ListItem key={item.id} item={item} onClick={updateItem} />
        ))}
    </ul>
  );
}

export { ReactMemoExample1, ReactMemoExample2, ReactMemoExampleItemList };

// https://www.geeksforgeeks.org/difference-between-react-memo-and-usememo-in-react/#what-is-reactmemo-

// https://chatgpt.com/c/67f4ecfd-4fe0-8001-8931-4758b899ee05
