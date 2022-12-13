import './App.css';
import React, { useState } from 'react'
import Contact from './component/Contact';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import Alert from './component/Alert';
//router ki help se hum easily navigate kr skte hn bina page ko reload kiye
//navbar me a and href ke badle Link and to use kro
//Router tag return ke just baad lgao
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  //hum yha se pure website ke state ko change krna chahte hn to hume useState ka use krna hoga. website component ke rup me hoti hn islye hr component me hume state variable ko props ke rup me send krna hoga
  const toggleMode = () => {
    if (mode.color === 'black') {
      setMode({
        color: 'white',
        backgroundColor: 'black'
      })
      //index.html me kuch v change krna chahte ho to document. se kro
      document.title = "TextUtils- Dark Mode"
      document.body.style.backgroundColor = "black"
      showAlert("Dark Mode is Enabled", "success")
    }
    else {
      setMode({
        color: 'black',
        backgroundColor: 'white'
      })
      document.title = "TextUtils- Light Mode"
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is Enabled", "success")
    }
  }
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(function () {
    setAlert(null)
  }, 1400)
  const [alert, setAlert] = useState(null)
  return (
    <Router>
      <Navbar title="TextApp" aboutText="About Us" toggleMode={toggleMode} mode={mode} showAlert={showAlert} />
      {/* <Navbar title = "TextUtils" aboutText = "3"/> */}
      {/* <Navbar/> */}
      <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Textarea mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
  );
  //aap ek customised components bna skte ho aur usko reuse kr skte ho simply import krke.
  //ek customised component ko kuch value v send kr skte ho.- props
  //Navbar ke propType ko v set kr skte hn using object
  //customised components ko import kr skte ho
}

export default App;
