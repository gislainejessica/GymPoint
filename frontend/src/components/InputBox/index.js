import React from 'react';

import { Container, Label } from './styles';

export default function InputBox({ label, input}) {
  return (
    <Container>
      <Label> {label} </Label>
      <input type="text" placeholder={input}/>
    </Container>
  );
}
