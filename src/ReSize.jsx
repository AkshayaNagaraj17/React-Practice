import { useState,useEffect } from "react";
function ReSize()
{
    const [width,setWidth]=useState(window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)
    useEffect(()=>{
        window.addEventListener("resize",reSizehandle)

    })
    // To rendder the title using
    
    // useEffect(()=>
    // {
    //     document.title=`Size : ${width} x ${height}`
    // },{width,height})
    
    function reSizehandle()
    {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    return(
        <div>
            <p>Width: {width}</p>
            <p>Height: {height} </p>
            <br /><br />
        </div>
    )
}
export default ReSize