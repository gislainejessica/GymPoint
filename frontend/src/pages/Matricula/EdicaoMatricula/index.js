import React from 'react';
import Input from '../../../components/InputBox';
import Button from '../../../components/Button';

import { Container , InfoCadastro} from './styles';

export default function EdicaoMatricula() {

  return (
    <>
    <InfoCadastro>
      <h2> Edição de Matrícula </h2>
      <div className="Botaos">
        <Button label={"Voltar"}> </Button>
        <Button label={"Salvar"}> </Button>
      </div>
    </InfoCadastro>
   
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
