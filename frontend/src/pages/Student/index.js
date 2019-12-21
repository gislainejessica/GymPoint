import React from 'react';

import { Container, Title , PageInfo, Side} from './styles';

export default function Student() {
  return (
   <Container>
     <PageInfo>
         <Title> Gerenciamento de Alunos </Title>
         <Side>
            <button> CADASTRAR </button>
            <input type="text"/>
         </Side>
     </PageInfo>
   </Container>
  );
}
