//import logo from './logo.svg';
import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React, { useState } from 'react';
//import React from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert=(message, type)=>{
setAlert({
  msg: message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
  },1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been enabled","success");
    }
    else {
      setMode('grey');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success");
    }
  }
  return (
    <>

      <Navbar title="Texttutils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        {<Textform showalert="showalert"heading="Enter the text to analyze below" />}

      </div>
    </>
  );
}



export default App;
