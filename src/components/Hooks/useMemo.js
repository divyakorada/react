import { useMemo, useState, memo, useEffect } from "react";

//https://www.geeksforgeeks.org/react-js-usememo-hook/ (wrong) give fix using memo) not understand
const Child = ({ userInfo }) => {
  console.log("UseMemo() Child component rendered1");
  return <p>User: {userInfo.name}</p>;
};

function UseMemoExample1() {
  const [count, setCount] = useState(0);
  const userInfo = useMemo(
    () => ({
      name: "Geeks for Geeks",
    }),
    []
  );

  return (
    <div className="usememo__ctn">
      <p>Count: {count}</p>
      <Child userInfo={userInfo} />
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

//Example 2
// https://www.geeksforgeeks.org/reactjs-hooks/?ref=lbp not understand
const UseMemoExample2 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("UseMemo() expensiveCalculation1");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h5>Count: {count}</h5>
      <h5>Expensive calculation: {expensiveCalculation}</h5>
      <button onClick={() => setCount(count + 1)}>Increment count</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};


//Example 3
//https://stackblitz.com/edit/react-simple-code-editor-hnpdyizx?file=src%2FApp.js
const UseMemoExample3 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // const ExpensiveCalculation = ({ num }) => {
  //     console.log("Calculating...");
  //     let result = 0;
  //     for (let i = 0; i < 1_000_000_000; i++) {
  //       result += num;
  //     }
  //     return <h2>Result: {result}</h2>;
  // };

  const ExpensiveCalculation = ({ num }) => {
    console.log("UseMemo() Calculating...");
    const result = useMemo(() => {
      let sum = 0;
      for (let i = 0; i < 1_000_000_000; i++) {
        sum += num;
      }
      return sum;
    }, [num]); // Recalculates only when 'num' changes
    return <h5>Result: {result}</h5>;
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <button onClick={() => setNumber(number + 1)}>
        Change Number {number}
      </button>
      <ExpensiveCalculation num={number} />
    </div>
  );
};

//Example 4
const UseMemoExample4 = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  const computeExpensiveValue = (num) => {
    //  console.log('computing');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Using useMemo to memoize the result based on count
  const result = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div>
      <h3>With memo example</h3>
      <p>Count: {count}</p>;<p>Result: {result}</p>
      <p>Render Count: {renderCount}</p>
      <button> onClick={() => setCount(count + 1)}Increment Count</button>
      <button onClick={setRenderCount(renderCount + 1)}>
        Increment Render Count
      </button>
    </div>
  );
};

export { UseMemoExample1, UseMemoExample2, UseMemoExample3, UseMemoExample4 };

// https://chatgpt.com/share/67e64881-99a0-8001-9946-712424e79259
/*Syntax
const memoizedValue = useMemo(() => computeExpensiveValue(dep1, dep2), [dep1,dep2])*/

/*28/03/2025
 How useMemo is Supposed to Prevent Re-Renders
useMemo ensures that the userInfo object is only re-created when its dependencies change. Since the dependency array [] is empty, userInfo will always be the same object between renders.

However, React does not automatically prevent child components from re-rendering if the parent re-renders. The Child component will re-render whenever the Parent component renders, even though the userInfo object remains the same.

useMemo helps with referential equality, ensuring userInfo is stable.
It does not prevent a child component from re-rendering unless used with React.memo.
React.memo will stop re-renders if props haven't changed.

 You need to wrap Child in React.memo so it only re-renders when its props change.How to Actually Prevent Child from Re-Rendering
 To prevent unnecessary re-renders of the Child component, wrap it with React.memo,
which will ensure that it only re-renders if userInfo actually changes:*/
