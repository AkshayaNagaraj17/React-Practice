
import { useState } from "react"
function Component(){
    const [name,setName]=useState("Newbie")
    const uname=()=>setName("Akshaya")
    const [age,setAge]=useState(0)
    const iage=()=>setAge(age+1)
    
    const dage=()=>setAge(age-1)
    const reset=()=>setAge(0)
    return(
        <div className="container">
             <h1>Name:{name}</h1>
             <button className="c1" onClick={uname}>Change name</button>
             <h1>Age:{age}</h1>
             <button className="i" onClick={iage}>Increment age</button>
             <button className="d" onClick={dage}>Decrement age</button>
             <button className="r"  onClick={reset}>Reset age</button>
        </div>
       
    )
}
export default Component