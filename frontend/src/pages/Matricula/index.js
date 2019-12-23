import React from 'react';
import Tabela from '../../components/TableList'
// import { Container } from './styles';


export default function Matricula() {
  const dados = {
    title: [ "Nome","Email", "Idade"],
    content: [
      ["Maria", "maria@email.com", 22],
      ["João", "joao@email.com", 25],
      ["Cris", "cris@email.com", 42],
    ],
  }
  return (
    <Tabela data={dados} />
  );
}
