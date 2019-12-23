import React from 'react';
import Button from '../Button'
import { Container, Title, Side } from './styles';

export default function PageInfo({ title , button , input}) {
  return (
    <Container>
      <Title> {title} </Title>
      { button && 
        <Side>
          <Button label={"Lola"} />
          {input &&  <input type="text" placeholder={input}/>}
        </Side>
      }
    </Container>
  );
}
/** <input type="text" placeholder="Buscar alunos"/> */