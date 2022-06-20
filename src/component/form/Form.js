import "./Form.css";
import Input from "../input/Input";

const Form = function (props) {
  return (
    <form action='' className='form'>
      <div className='form__group'>
        <Input></Input>
        <button type='submit' className='form__button'>
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
