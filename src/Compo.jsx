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
        </div>
    )
}

export default Compo
