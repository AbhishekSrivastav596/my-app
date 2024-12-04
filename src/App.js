import React from 'react';
// import './App.css';
import Dashboard from './Components/Dashboard';


import { AlertTriangle } from 'react-feather'


function App() {
  const name = "Explorin Academy"
  const count = 3;
  const image = AlertTriangle;
  
  return (

    <>
    <Dashboard name={name} count={count} image={image}/>
    </>
  );
}

export default App;
