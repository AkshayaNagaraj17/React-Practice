 import { useState } from "react";
 function TodoList()
 {
    const [tasks,setTasks]=useState(["Wake-up at 6.00","Brush your teeth"])
    const[newt,setNew]=useState()
    function add()
    {
       if(newt.trim()!=="")
       {
        setTasks((t)=>[...t,newt])
       setNew("")
       }
       else{
        alert("Task is empty")
       }

    }
    function input(e)
    {
        setNew(e.target.value)
    }
    function remove(index)
    {
        setTasks((t)=>t.filter((_,i)=>i!==index))
    }
  
    return(
        <div className="con">
            <h1 className="head">Your Todo-List</h1>
            <div>
                <input type="text" className="inp" value={newt} onChange={input} placeholder="Enter your task !"/>
                <button className="add-btn" onClick={add}>Add task</button>
            </div>
            <ol className="ol">
                {tasks.map((t,index)=>(<li key={index}>
                <span>{t}</span>
                <button className="remove-btn" onClick={()=>remove(index)}>Remove</button>
                
                </li>))}
            </ol>

        </div>

    )
 }
 export default TodoList