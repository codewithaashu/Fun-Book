import React, { createContext } from 'react'
import ComB from './ComB'
/* const ComA = () => {
  return (
    <ComB name ={"Ashish Ranjan"}/>
  )
} //manually data pass */

//create a context or data
const Name = createContext();
const ComA = () => {
  return (
      //for passing data we need a provider and pass the data
      <Name.Provider value ={"Ashish Ranjan"}>
          <ComB />
      </Name.Provider>
  )
} //manually data pass

export default ComA
export { Name };

//React's UseContext hook make it easy to pass the data throughout our app without manually passing props down the tree.
//in this project , App.js ->ComA ->ComB ->ComC ko render kr rha hn
//agar hume ComA se ComC me data pass krna hn to normally hume ComA se ComB me data pass krna hoga fir ComB se ComC me data pass krni hogi. iska mtlb hume saari component me data pass krni hogi jo ki wastage of time hoga. 
//issi situation se bachne ke liye hum directly ComA se ComC me data pass kr skte hn.  
//it is simple alternative of redux when data is small or your app is small.
//In context API we use -> 1. create a context       2. provider         3. consumer or useContext
/*
1. Create a context or data for pass
2. for passing data, we need a provider or medium . it is also a component so it must be export and import.
3. Get the data -> we use consumer(but its too lenghty), so we use useContext 
 */

//context api ka ek part hn useContext Hook. context api ka consumer wale part ko useContext hook handle krta hn