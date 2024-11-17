import { useState,useEffect } from "react";
function DigitalClock()
{
    const[time ,setTime]=useState(new Date())
    useEffect(()=>
    {
        const inter=setInterval(()=>
            {
            setTime(new Date())
        },1000)
        return () => clearInterval(inter);
    },[])

    function formatTime()
    {
        let hours=time.getHours()
        const mins=time.getMinutes()
        const secs=time.getSeconds()
        const mer=hours >=12 ?"PM":"AM"
        hours = hours % 12 || 12;

        return`${hours.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")} ${mer}`
    }
    return(
        <div className="clock-con">
            <h1>Digital clock</h1>
            <div className="clock">
                <span>{formatTime()}</span>
                <br /><br /><br />
                <br />
            </div>
        </div>
    )
}
export default DigitalClock