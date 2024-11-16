function Button()
{
    // eventhandling
    const handle=(e)=>{e.target.textContent="ohhh"}
    return(
        <button className="btn" onClick={handle}>
            Click me!
        </button>
    )
}
export default Button    