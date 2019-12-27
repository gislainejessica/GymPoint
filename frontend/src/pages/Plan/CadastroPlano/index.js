import React from 'react';
import Input from '../../../components/InputBox';
import Button from '../../../components/Button';

import { Container , InfoCadastro} from './styles';

export default function CadastroPlanp() {

  return (
    <>
    <InfoCadastro>
      <h2> Cadastro de Plano </h2>
      <div className="Botaos">
        <Button label={"Voltar"}> </Button>
        <Button label={"Salvar"}> </Button>
      </div>
    </InfoCadastro>
   
    <Container>
      <Input label={"TITULO DO PLANO"} />
      <div className="blockend">
        <Input label={"DURAÇÃO (Em meses)"} />
        <Input label={"PREÇO MENSAL"} />
        <Input label={"PREÇO TOTAL"} />
      </div>
    </Container>
  </>
  );
}
