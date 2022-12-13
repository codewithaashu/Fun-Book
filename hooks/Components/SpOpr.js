import React from 'react'

const SpOpr = () => {
    const obj ={name:"Ashish",age:22,gender:"Male"}
    const [myObj, setMyObj] = React.useState(obj)
    //hook is use to change the content of web page dynamicaly
    const update = ()=>{
        setMyObj({name:"Raj",age:22,gender:"Male"})
        //setMyObj update the value and set in myObj
        //Agar hum dekhe to setMyObj function bs name ki value change kr rha hn aur baaki as it is hn. to fir hum kyu pura like.
        //code ke reuseability ke liye spread operator use krte hn
        setMyObj({...myObj,name:"Raj"}) 
        // ...myObj ka mtlb pura myObj object aur usme name ki value raj kr do.
    }
  return (
    <>
    <h1 className="h1style">
        Name:{myObj.name} | Age: {myObj.age} | Gender :{myObj.gender}
    </h1>
    <button className="btn" onClick={update}>Click Me</button>
    </>
  )
}

export default SpOpr