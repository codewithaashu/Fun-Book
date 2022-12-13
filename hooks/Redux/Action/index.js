//action are created using action creator function

export const incNumber = ()=>{
    return{
        type:"Increment"
    }
}

export const decNumber = ()=>{
    return{
        type:"Decrement"
    }
}

export const mulNumber = ()=>{
    return{
        type:"Multiply"
    }
}

export const divNumber = ()=>{
    return{
        type:"Divide"
    }
}

//use this function to another file we have to be export
