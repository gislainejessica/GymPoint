import React from 'react';
import Input from '../../../components/InputBox';
import Button from '../../../components/Button';

import { Container } from './styles';
import Info from '../../../components/CadastroInfo';

export default function EdicaoAluno() {

  return (
    <>
    <Info title="Edição de Aluno" />
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
