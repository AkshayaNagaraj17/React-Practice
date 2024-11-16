            //   TO-DO 
import { useState } from "react";
function ToDo()
{     
    const[todo,setTodo]=useState(["First task","Second task"])
    const[newtask,setTask]=useState()
    const addTask=()=>{setTodo([...todo,newtask])
    setTask("")}
    const remove=(index)=>{
        setTodo(todo.filter((_,i)=>i!== index))
    }

    return(
        <div>
            <h1>To-Do list</h1>
            <ul>
                {todo.map((to,index)=> (<li key={index} onClick={()=>remove(index)} >{to}</li>))}
                
            </ul>
            <input type="text" id="n" onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={addTask}>Add task</button>
        </div>
    )
}
export default ToDo