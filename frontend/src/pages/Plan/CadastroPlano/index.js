import React from 'react';

import CadastroInfo from '../../../components/CadastroInfo';
import Input from '../../../components/InputBox';

import { Container} from './styles';

export default function CadastroPlano() {
  return (
    <>
    <CadastroInfo title="Cadastro Plano" />
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
