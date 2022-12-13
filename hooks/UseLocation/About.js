import React from 'react'
import { useLocation,useHref } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const About = () => {
    const location = useLocation();
    let navigate = useNavigate();
    return (
    <>
    <h1 className='h1style'>
        Welcome to {location.pathname.replace('/',"")} Page
    </h1>
    <button className="btn" onClick={()=>{
        navigate(1)
    }}>Next Page</button>
    </>

  )
}

export default About

//useNavigate hook helps us to navigate in multiple pages
//useHistory Hook is replaced by useNavigate in react router dom v-6
//useNavigate and useLocation hook are present in react-router-dom npm package.
/* 
const navigate = useNavigate()
navigate('/path) -->specific path
navigate(1)->next page
navigate(-1)->previous page
*/
