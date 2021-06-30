import { useContext } from 'react';
import { Container } from './styles';

import { AuthContext } from '../../context/authContext';

import { Button } from '../../components/UI/Button';

export function Home() {
  const { onLogout } = useContext(AuthContext);

  return (
    <Container>
      <h1>Welcome Back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Container>
  );
};