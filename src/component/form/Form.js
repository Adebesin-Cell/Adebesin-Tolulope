import "./Form.css";
import Input from "../input/Input";
import { useState } from "react";

const Form = function (props) {
  const [query, setQuery] = useState("");

  const inputChangeHandler = function (e) {
    setQuery(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    if (query.trim() === "") return;

    props.onSearch(query);
  };

  return (
    <form action='' className='form' onSubmit={submitHandler}>
      <div className='form__group'>
        <Input onChange={inputChangeHandler}></Input>
        <button type='submit' className='form__button'>
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
