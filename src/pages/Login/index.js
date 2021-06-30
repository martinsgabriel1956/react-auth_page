import React, { useState, useEffect } from 'react'
import { Container, Actions, Control } from './styles';

import { Button } from '../../components/UI/Button';

export function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

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
      setEnteredEmail(event.target.value);
      setFormIsValid(
        event.target.value.includes('@') && enteredPassword.trim().length > 6
      );
    };
    
    function handlePasswordChange(event) {
      setEnteredPassword(event.target.value);
      
      setFormIsValid(
        enteredEmail.includes('@') && event.target.value.trim().length > 6
      );
  };

  function handleValidateEmail() {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  function handleValidatePassword()  {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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