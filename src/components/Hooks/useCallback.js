import React, { useState, useCallback, memo } from "react";

const Child = React.memo(({ a }) => {
    console.log("UseCallback Rendering Child!");
  return <button onClick={a}>Click me</button>;
});

const UseCallbackEample1 = () => {
  const [count, setCount] = useState(0);

  // Function is created every render, causing Child to re-render
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child a={handleClick} />
    </div>
  );
};

// Example 2
const funcSet = new Set();

const UseCallbackExample2 = () => {
  const [cnt, setCnt] = useState(0);
  const [num, setNum] = useState(0);

  // const incCnt = useCallback(() => setCnt(cnt + 1), [cnt]);
  // const decCnt = useCallback(() => setCnt(cnt - 1), [cnt]);
  // const incNum = useCallback(() => setNum(num + 1), [num]);

  const incCnt = useCallback(() => setCnt((preval) => preval + 1), []);
  const decCnt = useCallback(() => setCnt((preval) => preval - 1), []);
  const incNum = useCallback(() => setNum((preval) => preval + 1), []);

  funcSet.add(incCnt);
  funcSet.add(decCnt);
  funcSet.add(incNum);
  //alert(funcSet.size);

  return (
    <div>
      <p>count: {cnt}</p>
      <p>function count: {funcSet.size}</p>
      <button onClick={incCnt}>Increase Counter</button>
      <button onClick={decCnt}>Decrease Counter</button>
      <button onClick={incNum}>Increase Number</button>
    </div>
  );
};

//Example 3
const Child1 = React.memo(({ incCnt, decCnt }) => {
  console.log("UseCallback() Child");
  return (
    <div>
      <button onClick={incCnt}>Increase Counter</button>
      <button onClick={decCnt}>Decrease Counter</button>
    </div>
  );
});

const UseCallbackExample3 = () => {
  const [cnt, setCnt] = useState(0);

  const incCnt = useCallback(() => setCnt((prevCnt) => prevCnt + 1), []);
  const decCnt = useCallback(() => setCnt((a) => a - 1), []);

  return (
    <div>
      <Child1 incCnt={incCnt} decCnt={decCnt} />
      <p>{cnt}</p>
    </div>
  );
};

export { UseCallbackEample1, UseCallbackExample2, UseCallbackExample3 };

// https://chatgpt.com/share/67eb8a49-8724-8001-86b6-740e8ac5466b

/*Problem:
The handleClick function is recreated on every render.

Since Child receives a new function as a prop, it re-renders unnecessarily, even though handleClick logic hasn’t changed.

Solution:
useCallback ensures handleClick has the same reference across renders.

Child does not re-render unnecessarily, because its prop (a) remains unchanged.*/
