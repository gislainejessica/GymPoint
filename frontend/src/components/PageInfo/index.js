import React from 'react';
import Button from '../Button';
import { Container, Side } from './styles';
import { useHistory } from 'react-router-dom';

export default function PageInfo({ title , button , input}) {
  const history = useHistory();

  const  handleClick = () => {
    history.push("/alunos")
  }

  return (
    <Container>
      <h2> {title} </h2>
      { button && 
        <Side>
          <Button label={"CADASTRAR"}  action={handleClick}/>
          {input &&  <input type="text" placeholder={input}/>}
        </Side>
      }
    </Container>
  );
}
/** <input type="text" placeholder="Buscar alunos"/> */