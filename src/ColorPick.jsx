// COLOR-PICKER

import { useState } from "react"
function ColorPick()
{
    const[color,setColor]=useState("#fffff")
    const handlec=(e)=>setColor(e.target.value)
return(
    <div className="container">
        <h1>Colour-Picker</h1>
        <div className="colordisp"style={{backgroundColor:color}}>
            <p>selected colour:{color}</p>
            </div>

            <label htmlFor="">Select a colour: </label>
            <input type="color" value={color}  onChange={handlec}/>


        
    </div>
)
}
export default ColorPick