import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.pathname)
  return (
      <>
    <h1 className='h1style'>
        Welcome to Home Page
    </h1>
{/*     {
        location.pathname==='/about/ashish'?
        <p>Welcome Ashish Ranjan</p> :
        <p>Please Login</p>
    } */}
    <button className="btn" onClick={()=>navigate(-1)}>Go Back</button>
      </>
  )
}

export default Home

//useLocation Hook is used to get the current location. 
//useLocation Hook return the location object which represent the current url
//to get current url of location -> location.pathName