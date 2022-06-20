import "./Input.css";

const Input = function (props) {
  return (
    <input
      type={props.type}
      name={props.name}
      role={props.role}
      className='input'
      onChange={props.onChange}
    />
  );
};

export default Input;
