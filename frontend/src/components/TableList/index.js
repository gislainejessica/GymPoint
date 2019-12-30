import React from 'react';

import { Container, Tabela } from './styles';

export default function TableList({ title, data, type } ) {
  return (
   <Container>
     <Tabela>
        <thead>
            <tr> {title.map(head => (<th> {head} </th>))} </tr>
        </thead>
        <tbody>
            {data.map(body => (
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
