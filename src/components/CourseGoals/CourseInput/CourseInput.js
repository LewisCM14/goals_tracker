import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // Handles dynamic form display on submit
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length>0) {
        setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //  upon submit trims any whitespace and checks the string length.
    // if 0, calls the setIsValid function, updating its state to false
    // before executing return and preventing the formSubmitHandler from completing.
    if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
    }
    props.onAddGoal(enteredValue);
  };

   /* dynamically sets the form CSS class, if isValid returns false,
  using the template literal, appends invalid to the className, else appends a blank string */
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;