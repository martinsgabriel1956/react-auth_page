import React, { useState, useEffect, useReducer } from 'react';
import { Container, Actions, Control } from './styles';

import { Button } from '../../components/UI/Button';

function emailReducer(state, action) {
  if(action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@')}
  }

  if(action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@')}
  }
  return { value: '', isValid: false }
}

export function Login(props) {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', 
    isValid: null
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //   setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  
  //   return () => {
    //     clearTimeout(identifier);
    //   };
    // }, [enteredEmail, enteredPassword])
    
    function handleEmailChange(event) {
      dispatchEmail({type: 'USER_INPUT', val: event.target.value});

      setFormIsValid(
        event.target.value.includes('@') && enteredPassword.trim().length > 6
      );
    };
    
    function handlePasswordChange(event) {
      setEnteredPassword(event.target.value);
      
      setFormIsValid(
        emailState.isValid && event.target.value.trim().length > 6
      );
  };

  function handleValidateEmail() {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: 'INPUT_BLUR',
    })
  };

  function handleValidatePassword()  {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Control
          className={`${
            emailState.isValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={handleEmailChange}
            onBlur={handleValidateEmail}
          />
        </Control>
        <Control
          className={`${
            passwordIsValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={handlePasswordChange}
            onBlur={handleValidatePassword}
          />
        </Control>
        <Actions>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </Actions>
      </form>
    </Container>
  );
};