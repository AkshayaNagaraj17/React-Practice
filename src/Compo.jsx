// ONCHANGE EVENTS
import { useState } from "react"
function Compo()
{
    const [name,setName]=useState("")
    const handle=(e)=>setName(e.target.value)
    const [quant,setQuant]=useState("")
    const handleQ=(e)=>setQuant(e.target.value)
    const [payment,setPayment]=useState("")
    const handlep=(e)=>setPayment(e.target.value)
    const [ship,setShip]=useState("delivery")
    function handler(e)
    {
        setShip(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handle} />
            <p>Name:{name}</p>
            <input type="number" onChange={handleQ} />
            <p>Quant:{quant}</p>
            <select name="" id="" onChange={handlep}>
                <option value="Bank transfer">Bank transfer</option>
                <option value="Gift card">Gift card
                </option>
                <option value="Debit card">Debit caed</option>
            </select>
            <p>Payment type : {payment}</p>
            <label >
                <input type="radio" value="pick-up" checked={ship==="Pick-up"} onChange={handler}/>
                pickup
                <br></br>
                <input type="radio" value="delivery" checked={ship==="delivery"} onChange={handler}/>
                delivery


            </label>
            <p> Shipping:{ship}</p>
        </div>
    )
}

export default Compo
