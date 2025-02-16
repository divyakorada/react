import logo from './logo.svg';
import './App.css';
import {Greet, PropsDestruct} from './components/Funtional-component';
/* import { GreetConst } from './components/Greet'; */
import MyClassComponent from './components/Class-component';
import Hello from './components/Test-jsx';
import ExplainState from './components/State';
import SetStateCounter from './components/SetStateCounter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'
import Stylesheet from './components/Styles/Stylesheet';
import Inline from './components/Styles/Inline';
import styles from './components/Styles/appStyles.module.css'
import './components/Styles/externalStyleSheet.css'
import FormHandling from './components/FormHandling';
import LifeCycleA from './components/LifeCycleA';
import Table from './components/FragmentDemo/Table';
import ParentCom from './components/PureComponent/PureComponent&Memo/ParentCom';
import RefsDemo from './components/Refs/RefsDemo';
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom';
import {Profile} from './components/Authentication/Profile';
import {AuthProvider} from './components/Authentication/auth';
import { Login } from './components/Authentication/Login';
import {Navbar} from './components/Authentication/Navbar';
import Home from './components/Authentication/Home';
import About from './components/Authentication/About';
import RequireAuth from './components/Authentication/RequireAuth';
import Form from './components/Formvalidation/Form';
import ProductDashboard from './components/ContentProjection/ProductDashboard';


function App() {

  return (
   
    <div className="App">
      <AuthProvider>
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      <ProductDashboard/>
      <Form/>
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
       <ExplainState/>
       <SetStateCounter/>
       <EventBind/>
       <ParentComponent/>
       <ConditionalRendering/>
       <ListRendering/>
       <Stylesheet color={true}/>
       <Inline/>
       <div className={styles.success}>Module CSS</div>
       <FormHandling/>
       <LifeCycleA/>
       <Table/>
       <ParentCom/>
       <RefsDemo/>
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
 rconst => create constructor */ 