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
  const removebodyclasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode = (cls) => {
    removebodyclasses();
    document.body.classList.add('bg-'+cls)
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
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
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
