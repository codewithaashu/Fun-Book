import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Icon from '@mui/material/Icon';


const App=()=>{
    
    let [num,Setnum]=useState(0);
    const add=()=>{
       Setnum(num+1);
    }

   
    const sub=()=>{
      if(num>0){  
    Setnum(num-1);
      }
    }


    return(
        <>
         <div className='container'>
    
      
         <h1 className='number'>{num}</h1>
          <Icon style={{ color:"green" }} onClick={add}>add_circle</Icon>
        
         <AddBoxIcon onClick={add}/>
        
         </div>

        </>

    );
}


export default App;