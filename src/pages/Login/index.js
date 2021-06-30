import React, { useState, useReducer, useEffect, useContext, useRef } from 'react';
import { Container, Actions } from './styles';

import { AuthContext } from '../../context/authContext';

import { Button } from '../../components/UI/Button';
import { InputField } from '../../components/InputField';

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

  const { onLogin } = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();


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
    if(formIsValid) {
      onLogin(emailState.value, passwordState.value);
    } else if(!formIsValid){
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();

    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputField 
          ref={emailInputRef}
          className={`${emailState.isValid === false ? "invalid" : ""}`}
          type='email'
          id="email"
          value={emailState.value}
          onChange={handleEmailChange}
          onBlur={{handleValidateEmail}}
          htmlFor="email"
        />

        <InputField
          ref={passwordInputRef}
          className={`${passwordState.isValid === false ? 'invalid' : ''}`}
          type="password"
          id="password"
          value={passwordState.value}
          onChange={handlePasswordChange}
          onBlur={handleValidatePassword}
          htmlFor="password"
        />
        <Actions>
          <Button type="submit">
            Login
          </Button>
        </Actions>
      </form>
    </Container>
  );
};