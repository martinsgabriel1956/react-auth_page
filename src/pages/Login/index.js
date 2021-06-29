import React, { useState } from 'react'
import { Container, Actions, Control } from './styles';

import { Button } from '../../components/UI/Button';

export function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  function validateEmailHandler() {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  function validatePasswordHandler()  {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  function submitHandler(event) {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };


  return (
    <Container>
      <form onSubmit={submitHandler}>
        <Control
          className={`${
            emailIsValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
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
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
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