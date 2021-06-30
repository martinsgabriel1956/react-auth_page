import React, { useRef, useImperativeHandle, forwardRef } from 'react'

import { Container } from "./styles";

export const InputField = forwardRef((props, ref) => {
  const inputRef = useRef();

  function active() {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: active
    }
  });

  return (
    <Container className={props.className}>
      <label htmlFor={props.htmlFor | ''}>E-Mail</label>
      <input
        ref={inputRef}
        type={props.type | 'text'}
        id={props.id | ''}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </Container>
  );
});
