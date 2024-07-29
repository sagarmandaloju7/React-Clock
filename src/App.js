import React, { useEffect, useState } from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css' 

const App = () => {
  const [time , setTime]=useState(new Date());

  useEffect(()=>{
    
    setInterval(
      ()=>setTime(new Date())
      ,1000);
  
  }

  )

  return (
    <div style={{ backgroundColor:'yellow' , display: 'inline-block', top:'50%', left: '50%', padding: '10vh',position: 'absolute', transform: 'translate(-50%, -50%)'}}>
      <Clock value={time} size={300} renderNumbers={true}/>
        <h1>React Js Clock</h1>
     
    </div>
  )
}

export default App
