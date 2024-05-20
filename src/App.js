import "./App.css";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";
import Alert from "./Components/Alert.js";
import About from "./Components/About.js";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  // const tmode = () => {
  //   if (mode === 'light') {
  //     setMode('green');
  //     document.body.style.backgroundColor = '#8fe9a5';
  //     showAlert("Green mode has been enabled", "success");
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} tmode={tmode}/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter text here to Analyze" mode={mode}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
