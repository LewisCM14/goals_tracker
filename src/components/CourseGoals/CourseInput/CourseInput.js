import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // Handles dynamic form display on submit
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    // once trimmed length exceeds one calls setIsValid, updating state to true
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

   /* turns invalid ON if isValid returns false */
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;