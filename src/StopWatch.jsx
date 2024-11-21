import { useEffect, useState,useRef } from "react"
function StopWatch()
{

    const [run,setRun]=useState(false)
    const [elapsed,setElapsed]=useState(0)
    const startTimeRef=useRef(0)
    const intervalRef=useRef(null)
    useEffect(()=>
    {
        if(run){
           intervalRef.current= setInterval(() => {
                setElapsed(Date.now()-startTimeRef.current)
            }, 10);
        }
        return () => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }}
    },[run])
    
    function start()
    {
        setRun(true)
        startTimeRef.current=Date.now()-elapsed
    }
    function stop()
    {
        setRun(false)
    }
    function reset()
    {
        setRun(false)
        setElapsed(0)
    }
    function format()
    {
        let hours=Math.floor(elapsed/(1000*60*60))
        let minutes=Math.floor(elapsed/(1000*60)%60)
        let seconds=Math.floor(elapsed/(1000)%60)
        let milli=Math.floor((elapsed%1000)/10)
        return`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milli.toString().padStart(2,"0")}`
    }
    return(
        <div className="stopwatch">
            <div className="display">
                <h1>{format()}</h1>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatch 