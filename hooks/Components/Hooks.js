import React,{useState} from 'react'

const Hooks = () => {
/*     var name = "Ashish Ranjan";
    const changeName = ()=>{
        name = "SnehaRaj";
        console.log("name:"+name);
    }
    console.log("name:"+name); */
    //event fire hone se content change ni ho rha hn, mtlb ki name variable ki value change ho gyi but render ni hua browser pe . islye hum hook ka use krte hn jo rerender krta hn.
    const [user, setUser] = useState("Ashish Ranjan");
    console.log("user:"+user);
    //Hook component ko rerender krti hn.
    //value bhi change kr deti aur rerender v krti hn.
    const changeName = ()=>{
        //You can't use hooks conditionally. If you want then condition will write inside the hooks.
        if(user==="Ashish Ranjan"){
            setUser("SnehaRaj");
        }
        else
        {
            setUser("Ashish Ranjan");
        }
    }
    return (
    <>
    <h1 className='h1style'>
        {user}
    </h1>
    <button className="btn" onClick={changeName}>
        Click Me
    </button>
    </>
  )
}

export default Hooks

//component must be exported for use in another file.
//Hooks is a special function which is used in functional component.
//Hook let you use state and other react features without writing a class.
//Hook let you hook into react features.
//Dynamically change the content,dom manipulation and api calls.

/*
Rule for React Hooks
1. Hooks always written inside functional component at the top level
2. If we use Hook,component name must be in Pascal Case and it must be import and export.
3. Don't call hooks inside loop, condition or nested 
if(user ==="Ashish Ranjan"){
    const changeName = ()=>{
        setUser("SnehaRaj");
        console.log("user:"+user);
    }
}else{
    
    const changeName = ()=>{
        setUser("SnehaRaj");
        console.log("user:"+user);
    }
}
4. Hooks must be imported for use.
e.g. import {hookName} from 'react'
            or,
    React.hookName();
 */