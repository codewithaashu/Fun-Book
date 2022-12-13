import React,{useEffect, useState} from 'react'

const DependencyList = () => {
    const [count, setCount] = useState(0)
/*     useEffect(()=>{
        // console.log("Hi i am UseEffect log")
        //jitni baar component render hoga ya state change hoga utni baar automatically call hoga 
        document.title= count>=1?`Chats(${count})`:"Chats"
    }) */

    //defaullt behaviour ko change ke liye dependency list use krte hn 
    // dependency list second argument hoti hn useEffect ka
/*     useEffect(()=>{
        console.log("Hi i am UseEffect log")
        //ab page reload hone pe call hogi , component render hone pe ni 
        document.title= count>=1?`Chats(${count})`:"Chats"
    },[]) */

    useEffect(()=>{
        console.log("Hi i am UseEffect log")
        //count ki value change pe hi call hogi 
        document.title= count>=1?`Chats(${count})`:"Chats"
    },[count])
  return (
    <>
    <div>
        <h1 className="h1style">
            {count}
        </h1>
        <button className="btn" onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
    </>
  )
}

export default DependencyList