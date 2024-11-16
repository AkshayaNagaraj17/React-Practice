import { useState } from "react";

// MULTI USESTATE
function MultiObj()
{
    const [details,setDetails]=useState([])
    const [name,setName]=useState("")
    const [age,setAge]=useState()
    const [gender,setGender]=useState("")
    function handLen(e)
    {
        setName(e.target.value)
    }
    function handLea(e)
    {
        setAge(e.target.value)
    }
    function handLeg(e)
    {
        setGender(e.target.value)
    }
    function add()
    {
        const new1={name,age,gender}
        setDetails(details=>[...details,new1])
        setAge("")
        setGender("")
        setName("")
    }
    return(
        <div>
            <h1>Details</h1>
            <ul>
                {details.map((de,index)=><li key={index}>
                    {de.name}{de.age}{de.gender}
                </li>)}
            </ul>
            <input type="text" value={name} onChange={handLen} />
            <br></br>
            <input type="text" value={age}onChange={handLea} />
            
            <br></br>
            <input type="text" value={gender} onChange={handLeg} />
            <button onClick={add}>Add</button>
        </div>
    )
}
export default MultiObj