import React from 'react';

import CadastroInfo from '../../../components/CadastroInfo';
import Input from '../../../components/InputBox';

import { Container } from './styles';

export default function CadastroPlano() {
  return (
    <>
    <CadastroInfo title="Cadastro Matricula" />
    <Container>
      <Input label={"ALUNO"} />
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
