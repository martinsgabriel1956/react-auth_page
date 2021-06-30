import React, { useState, useReducer, useEffect, useContext } from 'react';
import { Container, Actions, Control } from './styles';

import { AuthContext } from '../../context/authContext';

import { Button } from '../../components/UI/Button';

function emailReducer(state, action) {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
}

function passwordReducer(state, action) {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
}

export function Login(props) {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', 
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', 
    isValid: null,
  })

  const { onLogin } = useContext(AuthContext)

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
    setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);
  
    return () => {
        clearTimeout(identifier);
      };
    }, [emailIsValid, passwordIsValid])
    
  function handleEmailChange(event) {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };
    
  function handlePasswordChange(event) {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  function handleValidateEmail() {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  function handleValidatePassword()  {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
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
            passwordState.isValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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