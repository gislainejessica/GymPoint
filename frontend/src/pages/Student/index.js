import React from 'react';

import { Container, Title , PageInfo, Side, Box} from './styles';

export default function Student() {
  return (
   <Container>
     <PageInfo>
         <Title> Gerenciamento de Alunos </Title>
         <Side>
            <button> CADASTRAR </button>
            <input type="text" placeholder="Buscar alunos"/>
         </Side>
     </PageInfo>

     <Box>

     </Box>
   </Container>
  );
}
