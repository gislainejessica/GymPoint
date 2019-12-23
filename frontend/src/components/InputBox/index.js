import React from 'react';

import { Container, Title, Side } from './styles';

export default function InputBox({ title , button , input}) {
  return (
    <Container>
      <Title> {title} </Title>
      { button && 
        <Side>
          <button> CADASTRAR </button>
          {input &&  <input type="text" placeholder={input}/>}
        </Side>
      }
    </Container>
  );
}
/** <input type="text" placeholder="Buscar alunos"/> */