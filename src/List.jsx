// rendering list

function list(){
    const fruits=[{id:1,name:"Apple1",veg:"23"},
    {id:2,name:"Lpple",veg:"41"},
    {id:3,name:"orange",veg:"12"},
    {id:4,name:"banana",veg:"76"}]

    // fruits.sort((x,y)=>x.name.localeCompare(y.name))   ALPHABETICAL SORTING
    //Sorted using veg 
    fruits.sort((a,b)=>a.veg-b.veg) 

    //filter
    const lowveg=fruits.filter(f=> f.veg<30)

    const li=lowveg.map(f1=> <li key={f1.id}>
        {f1.name}:&nbsp;{f1.veg}
        </li>)

    
    return(
        <ul>{li}</ul>
    )

    
}
export default list