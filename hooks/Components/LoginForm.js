import React, { useState } from 'react'

const LoginForm = () => {
    //jaise hi keypress hoga event fire hoga aur webpage ke content change hoga uske state change hoga to usko rerender krna prega 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newEntry, setNewEntry] = useState({});
    const [show, setShow] = useState(false)
    const sumbitForm = (e)=>{
        //form ko sumbit krne pe automatically page refresh ho jata . iss automatically prevent krne ke liye . e.preventDefault() function use krte hn.
        e.preventDefault();
        if(email&&password){
            const entry = {Email:email,Password:password};
            setNewEntry(entry);
            //div tb show ho jb sumbit ho 
            setShow(true)
        }
        else
        {
            alert("plz fill the data")
        }
        //after submit form, clear the input form
        setEmail('');
        setPassword('');
    }
  return (
      <>
        <form action="" onSubmit={sumbitForm}>
            <label htmlFor="email" className='form label'>Email</label>
            <input type="email" className='form input' name='email' autoComplete='off' value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} />
            <label htmlFor="password" className='form label'>Password</label>
            <input type="password" className='form input' name='password' autoComplete='off' value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} />
            <button className="btn">Submit</button>
        </form>
            {show&&<h1 className="h1style">
                Email : {newEntry.Email} & Password :{newEntry.Password} 
            </h1>}
      </>
  )
}

export default LoginForm

//agar component input field ko control kr rha hn to controlled state bolte hn.
//isme hume value and onChange use krta hn
//agar jsx me inline function use krna hn to aise ()=>{code} aise krna hota 
//autocomplete off krne se suggestion webpage pe ni ayega