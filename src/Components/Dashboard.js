import React from 'react'
import { AlertTriangle } from 'react-feather'


function Dashboard({name,count,image}) {
  
  return (
    <>
    <div className="bg-blue-950 h-100 w-100 flex align-center justify-center m-20 p-40">
    
    <h1 className='text-white text-4xl'>{name}</h1>
    <br></br>
    <AlertTriangle color="red"/>
    
    <div className='text-white text-2xl'>{count}</div> 
   {/* <div className='h-40 w-40'>{image}</div> */}
    
    {/* <img src="Error.png"></img> */}
    
    {/* <h2 className='text-white text-1xl'>3+ Offline Centers</h2> */}
    
    </div>
    </>
  )
}

export default Dashboard
