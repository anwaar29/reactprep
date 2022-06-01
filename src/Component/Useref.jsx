import React,{useRef} from 'react'

const Useref = () => {
    const inputref=useRef(null)
    function handleinput(){
        console.log("this is handleinput function")
        inputref.current.value="100"
        inputref.current.style.color="red"
    }
  return (<>   
   <div> Below is example of Useref</div>
   <input type="text" ref={inputref} />
   <button onClick={handleinput}>Handle input</button>
</>
  )
}

export default Useref