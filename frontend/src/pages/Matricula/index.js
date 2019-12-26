import React from 'react';
import Tabela from '../../components/TableList';

import Info from '../../components/PageInfo';
// import { Container } from './styles';

export default function Matricula() {
  const dados = {
    title: [ "ALUNO","PLANO", "INÍCIO", "TÉRMNINO", "ATIVA"],
    content: [
      ["Maria Joanna","Start","30 de abril","30 de maio",  true],
      ["João José", "Diamond","10 de junho","10 de novembro", true],
      ["Cristine Mariana","Gold", "27 de janeiro","27 de outubro", false],
    ],
  }
  return (
    <>
      <Info title={"Gerenciamento de Matrículas"} button />
      <Tabela data={dados} />
    </>
  );
}
