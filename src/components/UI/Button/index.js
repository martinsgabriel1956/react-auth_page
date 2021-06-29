import { Container } from './styles';

export function Button({children, ...props}) {
  return (
    <Container
      type={props.type || 'button'}
      className={`${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </Container>
  );
};