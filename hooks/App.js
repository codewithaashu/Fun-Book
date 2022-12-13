import React from 'react';
// import React, { createContext } from 'react'
// import {Switch,Route,Redirect, Routes, BrowserRouter} from "react-router-dom";
import './App.css';
// import Hooks from './Components/Hooks';
// import UseState from './Components/UseState'; 
// import ArrayObject from './Components/ArrayObject';
// import SpOpr from './Components/SpOpr';
// import LoginForm from './Components/LoginForm';
// import UseEffect from './UseEffect/UseEffect';
// import DependencyList from './UseEffect/DependencyList';
// import CleanupFunc from './UseEffect/CleanupFunc';
// import UseRef from './Components/UseRef';
// import UseReducer from './Components/UseReducer';
// import ComA from './UseContext.js/ComA';
// import About from './UseLocation/About';
// import Contact from './UseLocation/Contact';
// import Home from './UseLocation/Home';
// import NavBar from './UseLocation/NavBar';
// import ReactToastify from './Components/ReactToastify';
import ReduxIntro from './Redux/ReduxIntro';

//create a context
// const BioData = createContext();
const App = () => {
  return (
    <>
      {/* <Hooks/> */}
      {/* <UseState/> */}
      {/* <ArrayObject/> */}
      {/* <SpOpr/> */}
      {/* <LoginForm/> */}
      {/* <UseEffect/> */}
      {/* <DependencyList/> */}
      {/* <CleanupFunc/> */}
      {/* <UseRef/> */}
      {/* <UseReducer/> */}
{/*       <BioData.Provider value={{name:"Ashish Ranjan",age:21,gender:"male"}}>
      <ComA/>
      </BioData.Provider> */}
{/*   <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}>
      </Route>
      <Route exact path="/about" element={<About/>}>
      </Route>
      <Route exact path="/contact" element={<Contact/>}>
      </Route>
    </Routes>
  </BrowserRouter> */}
  {/* <ReactToastify/> */}
  <ReduxIntro/>

    </>
  )
}

export default App
// export {BioData}