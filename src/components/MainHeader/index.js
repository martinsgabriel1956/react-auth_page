import { Container } from './styles';

import { Navigation } from './Navigation'

export function MainHeader(props) {
  return (
    <Container>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}/>
    </Container>
  );
};