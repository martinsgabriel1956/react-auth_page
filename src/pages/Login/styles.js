import styled from 'styled-components';

import { Card } from '../../components/UI/Card'

export const Container = styled(Card)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

export const Actions = styled.div`
  text-align: center;
`;

export const Control = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  label,
  input {
    display: block;
  }

  label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 0.5rem;
  }

  input {
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;

    &:focus {
      outline: none;
      border-color: #4f005f;
      background: #f6dbfc;
    }
  }
  &.invalid input {
    border-color: red;
    background: #fbdada;
  }

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;
