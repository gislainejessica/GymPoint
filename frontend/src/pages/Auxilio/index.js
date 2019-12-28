import React from 'react';
import Tabela from '../../components/TableList';
import Info from '../../components/PageInfo';

// import { Container } from './styles';

export default function Auxilio() {
    const dados = {
      title: [ "ALUNO"],
      content: [
        [ "Maria", 22],
        [ "João",  25],
        [ "Cris",  42],
      ],
    }
  return (
    <>
      <Info title={"Pedidos de Auxílio"} />
      <Tabela data={dados} button/>
    </>
  );
}
