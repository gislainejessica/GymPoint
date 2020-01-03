import React from 'react';

import { Container, Label, Entrada } from './styles';

export default function InputBox({ label, input}) {
  return (
    <Container>
      <Label> {label} </Label>
      <Entrada type="text" placeholder={input}/>
    </Container>
  );
}
