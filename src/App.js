import './App.css'
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setalert]=useState(null);
  const[color,setColor]=useState('white');
  

  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })

    setTimeout(() => {
      setalert(null);
      
    },1500);
  }
  
   
  
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success');
      setColor('#042743');
      
      setInterval(() => {
        document.title='Textutils-Dark Mode';

        
      },2000);

      setInterval(() => {
        document.title='Install Textutils now';
        
      },1500);
    }
    else if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      setColor('white');
      document.title='Textutils-Light Mode';
    }
  }

  const togglepurple=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#680747';
      showAlert('Purple mode has been enabled','success');
      setColor('#680747')
    }
    else if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      setColor('white');
    }

  }

  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" action="joss" mode={mode} togglemode={togglemode} togglepurple={togglepurple}/>
    <Alert alert={alert}/>
    <div className="container my-3">  
    <Routes>   
  
   
    
          <Route path="/about" element={<About mode={mode} />}/>
            
          
          
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} color={color} togglepurple={togglepurple}/>}/>
          
          
    </Routes>
   
    

    </div>
    </Router>

    
    
    
    
    
    
    
    
    
    
    
    </>
   )

 
}

export default App;
