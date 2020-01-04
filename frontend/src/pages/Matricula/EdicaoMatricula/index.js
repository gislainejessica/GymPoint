import React from 'react';
import Input from '../../../components/InputBox';
import Info from '../../../components/CadastroInfo';
import { Container } from './styles';

export default function EdicaoMatricula() {

  return (
    <>
    <Info title=" Edição de Matrícula" />
    <Container>
      <Input label={"ALUNO"}/>
      <div className="blockend">
        <Input label={"PLANO"} />
        <Input label={"DATA DE INÍCIO"} />
        <Input label={"DATA TÉRMINO"} />
        <Input label={"VALOR FINAL"} />
      </div>
    </Container>
  </>
  );
}
