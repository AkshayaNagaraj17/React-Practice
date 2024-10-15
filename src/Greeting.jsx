import PropTypes from "prop-types"
function Greeting(props){

if(props.isLogged){
    return <h2 className="login">Welcome {props.user}</h2>
}
else{
    return <h2 className="login1">Please log in!</h2>
}
}
export default Greeting

Greeting.propTypes={
    user:PropTypes.string,
    isLogged:PropTypes.bool,
}
Greeting.defaultProps={
    isLogged:false,
    user:"Guest",
}