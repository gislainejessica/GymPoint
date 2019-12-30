import React from 'react';
import Tabela from '../../components/TableList';
import Info from '../../components/PageInfo';

import { Container } from './styles';

export default function Plan() {
  const dados = {
    title: [ "TÍTULO","DURAÇÃO", "VALOR MENSAL"],
    content: [
      ["Start", "1 meses", 129],
      ["Gold", "3 meses",  109],
      ["Diamond ", "6 meses",  89],
    ],
  }
  return (
    <Container>
      <Info title={"Gerenciamento de Planos"} button />
      <Tabela data={dados} />
    </Container>
  );
}
