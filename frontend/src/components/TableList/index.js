import React from 'react';

import { Container, Tabela } from './styles';

export default function TableList({ data, type } ) {
  return (
   <Container>
     <Tabela>
        <thead>
            <tr> {data.title.map(head => (<th> {head} </th>))} </tr>
        </thead>
        <tbody>
            {data.content.map(body => (
              <tr>
                { body.map(content => <td> {content} </td>) } 
                { type === "1" 
                ?
                  <td> <button className="editar"> responder </button> </td>
                :
                <>
                  <td> <button className="editar"> editar </button> </td>
                  <td> <button className="apagar"> apagar </button> </td> 
                </>
                }    
              </tr> ))} 
          
        </tbody>
     </Tabela>
   </Container>
  );
}
