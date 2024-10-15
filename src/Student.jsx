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
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent:PropTypes.bool,
  };
export default Student