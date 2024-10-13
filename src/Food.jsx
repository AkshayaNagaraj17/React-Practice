function Food()
{
     const f1="Briyani"
     const f2="Pizza"
    return(
       <ul>
        <li>
            {f1}
        </li>
        <li>
            {f2.toUpperCase()}
        </li>
       </ul>
    )
}

export default Food 