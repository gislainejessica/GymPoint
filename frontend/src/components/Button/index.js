import React from 'react';

import { Container } from './styles';

export default function Button({label}) {
  return (
    <Container>
      <button> {label || "CADASTRAR"} </button>
    </Container>
  );
}
