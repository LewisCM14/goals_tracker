import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// // uses template literal to check props and if the invalid prop is passed adjust display depending on the isValid state.
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

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

   /* applies the form-control class to the div in a template literal, once isValid is set to false, also appends the invalid class */
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;