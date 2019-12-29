import React from 'react';
import Tabela from '../../components/TableList';
import Info from '../../components/PageInfo';

// import { Container } from './styles';

export default function Auxilio() {
    const dados = {
      title: [ "ALUNO"],
      content: [
        [ "Maria"],
        [ "João"],
        [ "Cris"],
      ],
    }
  return (
    <>
      <Info title={"Pedidos de Auxílio"} />
      <Tabela data={dados} type={"1"}/>
    </>
  );
}
