import React from 'react'
import { decNumber, incNumber } from './Action'
import { useDispatch, useSelector } from 'react-redux'
import Redux2 from './Redux2';
const ReduxIntro = () => {
    //action
    const dispatch = useDispatch();
    //initial state
    const state = useSelector((state)=>state.changeNumber)
  return (
    <>
    <body style={{display:"flex",justifyContent:"center"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
            <button className="btn" onClick={()=>dispatch(decNumber())} >-</button>
            <h1>
                {state}
            </h1>
            <button className="btn" onClick={()=>dispatch(incNumber())}>+</button>
        </div>
    </body>
    <Redux2/>
    </>
  )
}

export default ReduxIntro


//Redux manage the state of the application.
//Redux me ek separate store hoti hn jisme data aur applicaton ka state store hota hn aur jis component ko chahiye wo call kr leta hn.
//Redux ka use krne se agr hume parent to sub-sub-child me data send krna hn to hume child and sub-child ko data send krne ki jrurt ni hn. hum direct parent to sub-sub-child ko data send kr skte hn. UseContext and Context api me same kaam krta hn. bt redux me ek centralied store hota hn jisme application ka state aur data store hota hn jisko chahiye hota wo call kr leta hn.
//Redux is pattern and library for managing and updating application state using events called actions. It served as centralised store for state that needs to be used across your entire application
/*
In redux, there are three things:-
1. Action : - What to do (action creator function is used to create an action).
2. Reducer :- How to do(a function that takes the current state and action as arguments and return a new state)
3. Store :- (Js object which store the state of application)
-> only  one store in a application
-> only only root reducer function 
 */
//dispatch action ko call krta hn
//initial state ko get krne ke liye useSelector use krte hn

