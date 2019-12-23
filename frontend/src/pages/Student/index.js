import React from 'react';
import Info from '../../components/PageInfo'
import { Container, Title , PageInfo, Side, Box} from './styles';

export default function Student() {
  const dados = [
    ["Maria", "maria@email.com", 22],
    ["João", "joao@email.com", 25],
    ["Cris", "cris@email.com", 42],
  ]
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
        <thead>
          <tr>
            <th> NOME </th>
            <th> EMAIL </th>
            <th> IDADE </th>
            <th/>
            <th/>
          </tr>
        </thead>

        <tbody>
          {dados.map(aluno => ( 
            <tr>
              <td> {aluno[0]} </td>
              <td> {aluno[1]} </td>
              <td> {aluno[2]} </td>
              <td> <button className="editar"> editar </button> </td>
              <td> <button className="apagar"> apagar </button> </td>
            </tr>)
            )
          }
        </tbody>
     </Box>
   </Container>
  );
}
