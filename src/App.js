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
} from "react-router-dom";
import { Profile } from "./components/Authentication/Profile";
import { AuthProvider } from "./components/Authentication/auth";
import { Login } from "./components/Authentication/Login";
import { Navbar } from "./components/Authentication/Navbar";
import Home from "./components/Authentication/Home";
import Interview from "./components/Authentication/Interview";
//import About from "./components/Authentication/About";
import RequireAuth from "./components/Authentication/RequireAuth";
import Form from "./components/Formvalidation/Form";
import ProductDashboard from "./components/ContentProjection/ProductDashboard";
import ShowUsers from "./components/FetchDataFromAPI/ShowUsers";
import {Todos, AxiosPackage, CustomHookFetch, UserList} from "./components/FetchDataFromAPI/Todos";
import FunctionalChild from "./components/DataCommunication/Functional/Child";
import Datacommunication from "./components/DataCommunication/Datacommunication";
import {BorderedMessage, EnhancedComponent, FinalComponent} from "./components/HOC/Hoc";
import Hooks from "./components/Hooks/Hooks";
import CommonProps from "./components/Props/Props";
import { BuggyComponent, ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import CounterComponent from "./components/ErrorBoundary/counterComponent";
import Common from "./components/Controlled & Uncontrolled components.js/Common";
import RenderList from "./components/List/RenderList";
import Portal from "./components/Portals/Portal";
const LazyAbout  = lazy(() => import('./components/Authentication/About'));


function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0); // Ensure page always starts at the top
  }, []);
  //console.log(useCount)
  return (
    <div className="App">
      <div id="portal-root"></div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={
            <Suspense fallback='Loading...'>
              <LazyAbout />
            </Suspense>
            } />
            <Route path="interview" element={<Interview />} />
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
      <ProductDashboard />
      <div className="flex api-container">
        <ShowUsers />
        <Todos/>
        <AxiosPackage/>
        <UserList/>
      </div>
      <Form />
      <Datacommunication/>
      <FinalComponent/>
      <Hooks/>
    <CommonProps/>
    <ErrorBoundary>
      <CounterComponent/>
    </ErrorBoundary>
    <Common/>
    <RenderList/>
    <Portal/>

      <header className="App-header">
        {/*<Greet name="test1" city="Hyd"/> */}
        <Greet name="test2" city="Chennai">
          <p className="info">I'm test2 props children</p>
          <button className="button-cls">Click me</button>
        </Greet>
        {/*  <PropsDestruct name="props" city="Destructuring"/>*/}
        {/*<GreetConst></GreetConst> */}
        {/*  <MyClassComponent name="Test1" city="Hyd"/> */}
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
      </header>
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
