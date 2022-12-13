import React, { useRef, useState } from 'react'
//useRef Hooks is used in UnControlled forms.
//useRef Hooks is like a useState Hooks which preserves the value . But it doesn't rerender.
//useRef Hooks is a function which returns an object
const UseRef = () => {
  const [show, setShow] = useState(false)
  const luckyName = useRef();
  const sumbitForm=(e)=>{
    //change the default behaviour
    e.preventDefault();
    // console.log(luckyName);
    const name = luckyName.current.value
    name?setShow(true):alert("Please fill up the details")
  }
  return (
    <>
    <form action="" onSubmit={sumbitForm}>
      <label htmlFor="Email">Email</label>
      <input type="email" ref={luckyName} />
      <button className="btn">Submit</button>
    </form>
    {show&&<p>
      Email: {luckyName.current.value}
    </p>}
    </>
  )
}

export default UseRef

//There are two types of forms :-  Controlled and uncontrolled form
//In Controlled form, functional component control the input field. In this type of form, input tag must be have value and onChange attributes.
//UnControlled inputs are like as traditional HTML Form inputs.
//You can not needed to value and onChange attributes.
//It is like a traditional HTML form inputs in which we use id to target a specific tag. But here we use ref. e.g. document.getElementById("") 
//UnControlled is used in one-time value retrieval or one piece of data.