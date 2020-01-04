import React from 'react';
import Input from '../../../components/InputBox';
import Button from '../../../components/Button';

import { Container } from './styles';
import Info from '../../../components/CadastroInfo';

export default function EdicaoMatricula() {

  return (
    <>
    <Info title="Edição de Plano" />
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