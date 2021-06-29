import { Container } from './styles';

export function Card({children, ...props}) {
  return (
    <Container className={`${props.className}`}>
      {children}
    </Container>
  );
};