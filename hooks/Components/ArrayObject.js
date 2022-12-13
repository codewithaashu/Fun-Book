import React, { useState } from 'react'

const ArrayObject = () => {
    const bioData= [
        {
            id:0, name :"Ashish",age :21
        },
        {
            id :1, name :"Rohan",age :22
        },
        {
            id :2, name :"Bittoo",age:45
        },
        {
            id :3,name :"Abhishek",age :55
        }
    ];
    const [myArray, setMyArray] = useState(bioData)
    const clear = ()=>{
        setMyArray([ ]);
    }
  return (
    <>
        {
            myArray.map((currElem)=>{
                return(
                        <h1 className="h1style" key={currElem.id}>
                            Id : {currElem.id}, Name :{currElem.name}, Age :{currElem.age}
                        </h1>
                )
            })
        }
        <button className="btn" onClick={clear}>
            Clear
        </button>
    </>
    )
}

export default ArrayObject

//for iterate array we use map method
/* 
arrayName.map((currElem,index,arrayName)=>{
    return();
}
})
*/
//While iterating array , we should have a unique key for each element.