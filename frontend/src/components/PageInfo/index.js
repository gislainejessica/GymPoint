import React from 'react';
import Button from '../Button'
import { Container, Side } from './styles';

export default function PageInfo({ title , button , input}) {
  return (
    <Container>
      <h2> {title} </h2>
      { button && 
        <Side>
          <Button label={"Cadastrar"} />
          {input &&  <input type="text" placeholder={input}/>}
        </Side>
      }
    </Container>
  );
}
/** <input type="text" placeholder="Buscar alunos"/> */