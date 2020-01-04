import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Tabela } from './styles';

export default function TableList({ title, data, type } ) {
 
  const location = useLocation() 
  const history = useHistory()

  const handleEdicao = ()=> {
    history.push(`editar${location.pathname}`)
  }

  const handleDelete = () => {
    // Deleta linha e da refresh na pagina
  }
  
  const handleResposta = () => {
    history.push(`pergunte`)
  }
 
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
                  <td>
                    <button onClick={handleResposta} className="editar"> responder </button> 
                  </td>
                :
                <>
                  <td> 
                    <button onClick={handleEdicao} className="editar"> editar </button> 
                  </td>
                  <td> 
                    <button onClick={handleDelete} className="apagar"> apagar </button> 
                  </td> 
                </>
                }    
              </tr> ))} 
          
        </tbody>
     </Tabela>
   </Container>
  );
}
