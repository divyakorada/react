import {React, Suspense, lazy} from "react";
import "./App.css";
import { useEffect } from "react";
import { Greet, PropsDestruct } from "./components/Funtional-component";
import MyClassComponent from "./components/Class-component";
import Hello from "./components/Test-jsx";
import ExplainState from "./components/State";
import SetStateCounter from "./components/SetStateCounter";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import Stylesheet from "./components/Styles/Stylesheet";
import Inline from "./components/Styles/Inline";
import styles from "./components/Styles/appStyles.module.css";
import "./components/Styles/externalStyleSheet.css";
import FormHandling from "./components/FormHandling";
import LifeCycleA from "./components/LifeCycleA";
import Table from "./components/FragmentDemo/Table";
import ParentCom from "./components/PureComponent/PureComponent&Memo/ParentCom";
import RefsDemo from "./components/Refs/RefsDemo";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import { Profile } from "./components/Authentication/Profile";
import { AuthProvider } from "./components/Authentication/auth";
import { Login } from "./components/Authentication/Login";
import { Navbar } from "./components/Authentication/Navbar";
import RequireAuth from "./components/Authentication/RequireAuth";
import Round1 from "./components/Interview/Round1";
import Round2 from "./components/Interview/Round2";
import Round3 from "./components/Interview/Round3";
import InterviewLayout from "./components/Interview/InterviewLayout";
import HomeLayout from "./components/Home/HomeLayout";
import ContentProjectionTab from "./components/Home/ContentProjection";
import DataCommunicationTab from "./components/Home/DataCommunication";
import HocTab from "./components/Home/HocTab";
import HookTab from "./components/Home/Hook";
import ErrorBoundaryTab from "./components/Home/ErrorBondary";
import PropsTab from "./components/Home/Props";
import ListTab from "./components/Home/List";
import PortalTab from "./components/Home/Portal";
import ControlledUncontrolledTab from "./components/Home/Controlled & Uncontrolled";
import MakeAPITab from "./components/Home/MakeAPI";
import FormTab from "./components/Home/Form";
import SearchFilter from "./components/Interview/SearchFilter";
import Todolist from "./components/Todolist/Todolist";
import UseReduceHook from "./components/Interview/UseReduceHook";
import ListWithDelegation from "./components/Interview/EventDelegation";
import LargeDataSet from "./components/Interview/LargeDataSet";
const LazyAbout  = lazy(() => import('./components/Authentication/About'));


function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0); // Ensure page always starts at the top
  }, []);
  //console.log(useCount)
       function isBalancedBrackets(str) {
    let stack = [];
    let bracketsMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
      //debugger;
        if (Object.values(bracketsMap).includes(char)) {
            stack.push(char);
        } else if (Object.keys(bracketsMap).includes(char)) {
          console.log(stack.length === 0);
          console.log(stack.pop());
            if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Example usage
console.log(isBalancedBrackets("{[()]}")); // true

const obj = {
  b: 2,
  a: 1,
  c: 3
};

// Sort keys

const sortedObj = Object.keys(obj)
  .sort()
  .reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

console.log(sortedObj);

// function twoSum(nums, target) {
//   const seen = new Map();

//   for (let num of nums) {
//   //  debugger
//     const complement = target - num;
//     if (seen.has(complement)) {
//       return [complement, num];
//     }
//     seen.set(num, true);
//   }

//   return []; // if no pair found
// }

// twoSum([2, 7, 11, 15], 9);

function recur(n) {
    if(n === 0 || n === 1) return 1;
    return  n * recur(n - 1);
}

recur(4);


  return (
    <div className="App">
      <div id="portal-root"></div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Home and its nested routes */}
            <Route path="/" element={<HomeLayout />} >
              <Route index element={<Navigate to="ContentProjectionTab" replace />}></Route>
              <Route path="ContentProjectionTab" element={<ContentProjectionTab />}></Route>
              <Route path= "MakeAPITab" element={<MakeAPITab />}></Route>
              <Route path= "FormTab" element={<FormTab />}></Route>
              <Route path= "DataCommunicationTab" element={<DataCommunicationTab />}></Route>
              <Route path= "HocTab" element={<HocTab />}></Route>
              <Route path= "HooksTab" element={<HookTab />}></Route>
              <Route path= "PropsTab" element={<PropsTab />}></Route>
              <Route path= "ErrorBoundaryTab" element={<ErrorBoundaryTab />}></Route>
              <Route path= "ControlledUncontrolledTab" element={<ControlledUncontrolledTab />}></Route>
              <Route path= "ListTab" element={<ListTab />}></Route>
              <Route path= "PortalTab" element={<PortalTab />}></Route>
              <Route path= "TodoListTab" element={<Todolist />}></Route>
            </Route>
          {/* Home and its nested routes */}  
          {/* Interview and its nested routes */}
          <Route path="interview" element={<InterviewLayout/>} >
            <Route index element={<Navigate to="Debounce" replace />}></Route>
            <Route path="Debounce" element={<Round1 />}></Route>
            <Route path= "round2" element={<Round2 />}></Route>
            <Route path= "round3" element={<Round3 />}></Route>
            <Route path= "SearchFilter" element={<SearchFilter />}></Route>
            <Route path= "useReduceHook" element={<UseReduceHook />}></Route>
            <Route path= "event-delegation" element={<ListWithDelegation />}></Route>
             <Route path="large-dataset" element={<LargeDataSet />} />
            <Route path="large-dataset/:id" element={<LargeDataSet />} />
          </Route>
          {/* Interview and its nested routes */}
          
            <Route path="about" element={
            <Suspense fallback='Loading...'>
              <LazyAbout />
            </Suspense>
            } />
          
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

     {/* <header className="App-header">
        {/~<Greet name="test1" city="Hyd"/> ~/}
        <Greet name="test2" city="Chennai">
          <p className="info">I'm test2 props children</p>
          <button className="button-cls">Click me</button>
        </Greet>
        {/~  <PropsDestruct name="props" city="Destructuring"/>~/}
        {/~<GreetConst></GreetConst> ~/}
        {/~  <MyClassComponent name="Test1" city="Hyd"/> ~/}
        <MyClassComponent name="Test2" city="Chennai">
          <p className="info">I'm test2 props children</p>
        </MyClassComponent>
        <Hello></Hello>
        <ExplainState />
        <SetStateCounter />
        <EventBind />
        <ParentComponent />
        <ConditionalRendering />
        <ListRendering />
        <Stylesheet color={true} />
        <Inline />
        <div className={styles.success}>Module CSS</div>
        <FormHandling />
        <LifeCycleA />
        <Table />
        <ParentCom />
        <RefsDemo />
      </header>*/}
    </div>
  );

}

export default App;
/* functional, class components, JXS, props, state, setState(), Destructuring*/

/* pros is just an object that contains the attributes &
their values which have been passed from the parent component.
props are immutable*/

/*setState method is used to alter the state of a class component.
state is an object that is privatly maintain inside a component.
state influece what is render in the browser. state can be changed within the component.

///////setState()/////////
1. when ever you need to execute some code, after the state has been changed do not place that code right after the setState() method. 
Place the code within the callback function, that is passed second parameter to the setState() method.
2. setState() will rerender the component


getDerivedStateFromProps(props, state): This is static method. It doesn't have acces to this keyword. we cann't call this.setState in this method
render(): It is a pure function
*/

/* pure components prevents unneccessary renders can give you performace boot in certain scenarios.
A pure component implements shouldComponentUpdate with a shallow prop and state comparison. */

/*  rpce (react snippet) => pure class component
 rce => regular class component
 rafce => react arrow function Export component
 rconst => create constructor */
