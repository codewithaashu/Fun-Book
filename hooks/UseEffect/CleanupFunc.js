import React, { useEffect, useState } from 'react'

const CleanupFunc = () => {
    const [width,setWidth] = useState(window.innerWidth)
/*     useEffect(()=>{
        console.log("Hi, I am useEffect log")
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        })
    }) */
    console.log("Hi, I am outside log")
    //resize hogi width change hoga useState ki wjh se componet rerender hoga . component rerender hoga ye automatically call hogi. jisse baar baar function call hogi aur memory leakage hogi. isse bachne ke liye hume cleanUp function use krte hn
    //cleanUp function ye krta hn ki jiss function ko call krte hn usko ho clean ya remove krte hn

    const actualWidth = ()=>{
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        console.log(window.innerWidth)
        window.addEventListener('resize',actualWidth)
    })
  return (
      <>
      <h1 className="h1style">
          Window width is 
      </h1>
      <p>
          {width}px
      </p>
      </>
  )
}

export default CleanupFunc

//useEffect ki help se addEventListener use kr skte hn