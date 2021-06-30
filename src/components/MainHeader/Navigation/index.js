import React, { useContext } from 'react'

import { AuthContext } from '../../../context/authContext';

import { Container } from './styles';

export function Navigation(props) {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Container>
       <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </Container>
  );
};