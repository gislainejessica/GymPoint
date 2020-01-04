import React from 'react';
import Input from '../Input';
import { Container, Label } from './styles';

export default function InputBox({ label, input}) {
  return (
    <Container>
      <Label> {label} </Label>
      <Input type="text" placeholder={input}/>
    </Container>
  );
}
