import React, { useContext } from 'react'
import { Name } from './ComA'
/* const ComC = (props) => {
  return (
    <h1 className='h1style'>Hi,I am {props.name}</h1>
  )
} //manually data pass */

const ComC =()=>{
    const data = useContext(Name)
    //for get data 
    return(
        <h1 className="h1style">Hi,I am {data}</h1>
    )
}

export default ComC