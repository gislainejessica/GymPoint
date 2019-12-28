import React from 'react';
import Input from '../../../components/InputBox';
import Button from '../../../components/Button';

import { Container , InfoCadastro} from './styles';

export default function EdicaoAluno() {

  return (
    <>
    <InfoCadastro>
      <h2> Edicão de Aluno </h2>
      <div className="Botaos">
        <Button label={"Voltar"}> </Button>
        <Button label={"Salvar"}> </Button>
      </div>
    </InfoCadastro> 

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
