import { Container } from "./styles";

export function InputField(props) {
  return (
    <Container className={props.className}>
      <label htmlFor={props.htmlFor | ''}>E-Mail</label>
      <input
        type={props.type | 'text'}
        id={props.id | ''}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </Container>
  );
}
