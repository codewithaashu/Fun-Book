import React, { useReducer} from 'react'

/* const UseReducer = () => {
    const [count,setCount] = React.useState(0)
  return (
      <>
      <div style={{textAlign:"center"}}>
          <p >
              {count}
          </p>
          <button className="btn" onClick={()=>{setCount(count+1)}} >Increment</button>
          <br />
          <button className="btn"  onClick={()=>{setCount(count-1)}}>Decrement</button>
      </div>
      </>
  )
} */
//reducer function is defined above the functional components
const reducer=(state,action)=>{
    //dispatch function call the action method . aur humne action ko ek object pass kiya tha jisme type specify tha . yhi type btati hn ki kon si action pe kon sa state change krna hn
    if(action.type==='Inc'){
        return state+1;
    }
    if(action.type==='Dec'){
        return state-1;
    }
}
const UseReducer = () => {
    //useReducer hooks takes reducer function and initialState as a arguments and return array of size =2 in which two elements i.e. state and dispatch
    const [state,dispatch]=useReducer(reducer,0)
    //state current value ko hold krti hn aur dispatch call the action method
  return (
      <>
      <div style={{textAlign:"center"}}>
          <p >
              {state}
          </p>
          <button className="btn" onClick={()=>dispatch({type:"Inc"})} >Increment</button>
          <br />
          <button className="btn" onClick={()=>dispatch({type:"Dec"})} >Decrement</button>
      </div>
      </>
  )
}

export default UseReducer

//in this project when we click on increment button then value will be increase and when we click on decrement button then value will be decrement. Hence we can say that here we deal with two state i.e. increment and decrement .
// in such cases of multiple state we can go with useState but useReducer hook is most convenient

//useReducer Hook is used in case of multiple state.
//useReducer is a function which takes two arguments i.e. reducer function and initial state.
//reducer function is pure function which take state and action as a arguments and return a new state.It is defined above the functional components
//useReducer function return an array of size =2 in which state and dispatch
// dispatch() function call the action method.
//dispatch function takes object as a arguments in which type specify the action
/* 
    const [state,dispatch]=useReducer(reducer,initialState)
    const reducer =(state,action)=>{

    }
*/

