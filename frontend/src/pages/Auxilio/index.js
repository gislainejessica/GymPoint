import React from 'react';
import Tabela from '../../components/TableList';
import Info from '../../components/PageInfo';
import Box from '../../components/Box';

// import { Container } from './styles';

export default function Auxilio() {
    const dados = {
      title: [ "Ajuda","Nome", "Idade"],
      content: [
        ["Mas ué...", "Maria", 22],
        ["To aqui", "João",  25],
        ["Ajuda eu ", "Cris",  42],
      ],
    }
  return (
    <>
      <Info title={"Pedidos de Auxílio"} />
      <Tabela data={dados} button/>
    </>
  );
}
