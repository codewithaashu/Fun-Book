import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const ReactToastify = () => {
    const notify=()=>{
        toast('🦄 Successfully Sumbit', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
  return (
    <>
    <div style={{textAlign:'center'}}>
        <h1>
            Example of React Toastify
        </h1>
        <button className="btn" onClick={notify}>Submit</button>
        <br />
        <button className="btn">Click me</button>
        <br />
        <button className="btn">Press</button>
        <br />
        <button className="btn">Please Click me</button>
        <ToastContainer/>
    </div>
    </>
  )
}

export default ReactToastify

//react toastify is a npm package which is install from npm i react-toastify
//react toastify gives a better way for warning, success or etc message. Prevuiously do this work by alert
//react toastify toast or notification display krne ka ek better way hn
//jo bhi message display krna hota hn wo toast function me argument ke rup me paass kr dete hn
//e.g. toast("Successfully submit")
//aur ye component ko render krne ke liye iss component ko call v krna hoga
//css ko v import krna hota hn