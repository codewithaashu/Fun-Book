import React, { useContext } from 'react'
import  ComC from './ComC'
import { BioData } from '../App'

/* const ComB = (props) => {
  return (
    <ComC name ={props.name}/>
  )
} //manually data pass (props down the tree) */

const ComB = () => {
    //get the data
    const bioData =useContext(BioData)
  return (
      <>
        <h1 className="h1style">
            {bioData.name}&{bioData.age} & {bioData.gender}
        </h1>
        <ComC/>
      </>
  )
}

export default ComB