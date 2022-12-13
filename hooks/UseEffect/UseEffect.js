import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const changeVal = ()=>{
        setCount(count+1)
    }
    // console.log(useEffect)
    useEffect(()=>{
        //console.log("I am UseEffect log ")->it automatically call when component is render
        //we can't use hooks conditionally but we can use conditon inside the hooks
        if(count>=1){
            document.title=`Chats(${count})`
        }
        else{
            document.title = "Chats"
        }
    })
  return (
    <>
    <div>
        <h1 className="h1style">
            {count}
        </h1>
        <button className="btn" onClick={changeVal}>Click Me</button>
    </div>
    </>
  )
}

export default UseEffect


//useState and useEffect are two most widely used hooks.
//useState ka use tb krte hn jb ek event occur hone pe web page ka content ya state change ho
//useEffect ka use tb krte hn jb hume DOM Manipulate krna ho ya api call me
//useState rerender krta hn component ko 
//useEffect automatically call ho jata hn jb page ya component load hota hn.
//useEffect performs side effects(beyond the current function) in functional components.
/*
Uses of useEffect :-
1. DOM Manipulation
2. Data fetching(API Request to backend service)
3. Calls to our authentication services 
 */
//The simple example is whatsapp message where title of web page will be dynamically change
//useEffect is a function which takes two arguments . first one is kya effect daalna hn(kya dom manipulation krna hn) aur kb call krna hn (har baar page load hone ya component load hone pe i.e dependency list) 
//by default component load hone pe automatically call hoti hn.
//jaise hum click me pe click krte hn componet rerender hota hn aur useEffect function automatically call ho jati hn