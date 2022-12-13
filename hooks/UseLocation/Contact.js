import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {
    const location = useLocation();
    const navigate =useNavigate()
  return (
    <>
    <h1 className='h1style'>
        Welcome to {location.pathname.replace('/','')} Us Page
    </h1>
    <button className="btn" onClick={()=>navigate('/')}>Go to Home Page</button>
    </>

  )
}

export default Contact