import React, { useState } from 'react'

export const HOC = (props) => {
  return (
   <h2>   <props.cmp /></h2>
  )
}

 export function Counter(){
    const [count,setCount]=useState(0)
    return(<>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
    </>)
}