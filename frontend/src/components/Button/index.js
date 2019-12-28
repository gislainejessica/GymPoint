import React from 'react';
import { Container } from './styles';

export default function Button({label, action}) {
  return (
    <Container>
      <button onClick={action}> 
        { label || "CADASTRAR" } 
      </button>
    </Container>
  );
}
