import React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { MdAdd } from 'react-icons/md'

import Button from '../Button';
import { Container, Side } from './styles';

export default function PageInfo({ title , button , input}) {
  const history = useHistory()
  const location = useLocation()  

  let match = useRouteMatch({
    path: location.pathname,
    exact: true
  });

  const  handleClick = () => {
    if (match.path === "/alunos"){
        history.push("/cadastro/alunos")
    }
    if (match.path === "/matriculas"){
      history.push("/cadastro/matriculas")
    }
    if (match.path === "/planos"){
      history.push("/cadastro/planos")
    }
  }

  return (
    <Container>
      <h2> {title} </h2>
      { button && 
        <Side>
          <Button Icon={MdAdd} label={"CADASTRAR"}  action={handleClick} type={"primary"}/>
          {input &&  <input type="text" placeholder={input}/>}
        </Side>
      }
    </Container>
  );
}
