import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { divNumber, mulNumber } from './Action';

const Redux2 = () => {
    //action-> call krne ke liye
    const dispatch =useDispatch();
    //initial state ko get krne ke liye 
    const myState = useSelector((state)=>state.timeNumber);
    return (
        <>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <button className="btn" onClick={()=>dispatch(divNumber())}> /</button>
                    <h1>
                        {myState}
                    </h1>
                    <button className="btn" onClick={()=>dispatch(mulNumber())} >*</button>
                </div>

            </div>
        </>
    )
}

export default Redux2

//action will define using action creator function and must be export--> what to do
//reducer will define using reducer function which takes  initial state and action. ->how to do
//we pass only one root reducer so we combine all reducer using combineReducers functions
//create store and pass root reducer 
//Go to root folder and pass the store to app component using provider
//for action we use useDispatch
//for initial state we use useSelector