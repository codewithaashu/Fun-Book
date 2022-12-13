import React,{useState} from 'react'
//for using hooks you have to import hooks
const UseState = () => {
    // console.log(useState) -> useState is a function which takes initial state as a parameter. Parameters may be varaiables,array, object,etc.
    // console.log(useState()); -> which return an array of size =2 
    //[variable,function]

/*     const [state,setState] = useState("parameter");
    state hold the current value or state or content . current value is the parameter of useState
    setState is a function which set the update value or state or content */
    const [name,setName] =useState("Ashish Ranjan");
    const changeName = ()=>{
        if(name==="Ashish Ranjan"){
            setName("Raj Aryan");
        }
        else{
            setName("Ashish Ranjan");
        }
    }
  return (
    <div>
        <h1 className="h1styles">
            {name}
        </h1>
        <button className="btn" onClick ={changeName}>
            Change Name
        </button>
    </div>
  )
}

export default UseState

//useState is a most popular hooks which dynamically change the content of web pages on occurence of event.
