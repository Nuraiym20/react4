import React from 'react'
import { useState } from 'react';

const Btn = () => {
 const [value, setValue] = useState();
  const arr = ['bilal love me , because i am very beatuful']
  return(
    <>
      {
        value && <h1 > {arr}</h1>
      } 
      <button onClick={()=>setValue(true)}>uevfh</button>
    
    </>
)
}

export default Btn;