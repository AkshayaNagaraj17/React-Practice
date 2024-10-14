import PropTypes from "prop-types";
function Student(props){
    return(
        <div className="Stu">
            <p>
                Name : {props.name}
                
            </p>
            <p>
            Age : {props.age}
            </p>
            <p>
                isStudent:{props.isStudent ? "Yes":"No"}
            </p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent:PropTypes.bool.isRequired,
  };
export default Student