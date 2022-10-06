
import './App.css';
import Navbar from './Components/Navbar';
import Forms from './Components/Forms';
// import About from './Components/About';
import React,{useState} from 'react'
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [mode2, setMode2] = useState('white');
  const [alert1, setAlert] = useState(null);

  const showAlert = (message , type)=>{
  setAlert({
    msg : message ,
    type : type
  })

  setTimeout(()=>{
    setAlert(null)
  },1000)
  }

  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#1F2022'
      setMode2('#1F2022')
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setMode2('white')
      showAlert("Dark mode has been enabled","success")
      
    }

  }
  return (
   <> 
   {/* <Router> */}
<Navbar title="Textutils" about="About" mode={mode} toggleMode = {toggleMode}/>
<Alert alert = {alert1}/>
<div className='container'>

<Forms showAlert={showAlert} heading='ENTER TEXT HERE' mode2={mode2} mode={mode}/>
          
    {/* <Routes>
    <Route exact path="/" element = {<Forms showAlert={showAlert} heading='ENTER TEXT HERE' mode2={mode2} mode={mode}/>}/>
  
    <Route path="/about" element={<About/>}/>
    
  </Routes> */}
      
</div>
{/* </Router> */}
  
  </>
  );
}

export default App;
