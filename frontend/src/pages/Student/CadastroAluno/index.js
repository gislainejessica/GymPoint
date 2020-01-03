import React from 'react';

import Input from '../../../components/InputBox';
import CadastroInfo from '../../../components/CadastroInfo';

import { Container} from './styles';

export default function CadastroAluno() {
  return (
    <>
    <CadastroInfo title="Cadastro Aluno" />

    <Container>
      <Input label={"NOME COMPLETO"} input={"Insira seu nome"}/>
      <Input label={"ENDEREÇO DE EMAIL"} input={"Insira seu email"} />
      
      <div className="blockend">
        <Input label={"IDADE"} />
        <Input label={"PESO (em kg)"} />
        <Input label={"ALTURA"} />
      </div>
    </Container>
  </>
  );
}
