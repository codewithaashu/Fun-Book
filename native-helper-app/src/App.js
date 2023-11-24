import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [time,setTime]=useState(10);
  const interval = setInterval(() => {
    setTime(time-1);
  }, 1000);
  if(time===0){
    clearInterval(interval);
  }
  return (
    <>
      <h1>Time is : {time}</h1>
    </>
  )
}

export default App