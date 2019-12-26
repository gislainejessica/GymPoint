import React from 'react';
import Input from '../../../components/InputBox';

import { Container } from './styles';

export default function CadastroMatricula() {
  const dados = {
    title: [ "Nome","Email", "Idade"],
    content: [
      ["Maria", "maria@email.com", 22],
      ["João", "joao@email.com", 25],
      ["Cris", "cris@email.com", 42],
    ],
  }
  return (
    <Container>
      <Input />
    </Container>
  );
}
