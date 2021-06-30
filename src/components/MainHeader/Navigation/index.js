import React, { useContext } from 'react'

import { AuthContext } from '../../../context/authContext';

import { Container } from './styles';

export function Navigation() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
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
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </Container>
  );
};