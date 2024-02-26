import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="students">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Designation:{props.isStudent ? "Yes" : "No"}</p>
      {/* props work like a Key=Value Pair where the file Student.jsx is Child and 
      App.jsx is the Parent//// To get the value you type: "props.Name_of_The_key"*/}
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
