import React from 'react';
import Dashboard from './Components/Dashboard';
import { AlertTriangle } from 'react-feather';

function App() {
  const name = "Explorin Academy";
  const count = 3; 
  const images = [
    { url: 'image3.jpg', ready: true, error: false },
    { url: 'image2.jpg', ready: true, error: false },
    { url: 'logo192.png', ready: true, error: true }, 
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Dashboard name={name} count={count} images={images} />
    </div>
  );
}

export default App;
