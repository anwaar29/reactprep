import React, { useState , useEffect} from 'react'

export const Useeffect = () => {
    const[count,setcount]=useState(0)
    useEffect (()=>{
     console.log("this is use effect")
     document.title= ` chats (${count}) `
    })
  return (<>
    <div>use effect example {count}</div>
    <button onClick={()=>setcount(count+1)}> update</button>
    </> )
}
