import React from 'react';
import Info from '../../components/PageInfo';
import Tabela from '../../components/TableList';


import { Container, Side, Box} from './styles';

export default function Student() {
  const dados = {
    title: [ "NOME","EMAIL", "IDADE"],
    content: [
      ["Joanna", "Joanna@email.com", 29],
      ["Bruna", "Bruna@email.com",  19],
      ["Carolina ", "Carolina@email.com",  89],
      ["Joanna", "Joanna@email.com", 29],
      ["Bruna", "Bruna@email.com",  19],
      ["Carolina ", "Carolina@email.com",  89],
      ["Joanna", "Joanna@email.com", 29],
      ["Bruna", "Bruna@email.com",  19],
      ["Carolina ", "Carolina@email.com",  89],
      ["Joanna", "Joanna@email.com", 29],
      ["Bruna", "Bruna@email.com",  19],
      ["Carolina ", "Carolina@email.com",  89],
      ["Joanna", "Joanna@email.com", 29],
      ["Bruna", "Bruna@email.com",  19],
      ["Carolina ", "Carolina@email.com",  89],
    ],
  }
  return (
   <>
      <Info title={"Gerenciamento de Alunos"} button input={"Buscar alunos"} />
      <Tabela data={dados} />

   </>
  );
}
