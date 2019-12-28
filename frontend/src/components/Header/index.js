import React from 'react';
import logo from '../../assets/logoname.svg';
import { Container, Content, Profile, Linke } from './styles';
import { useRouteMatch, useLocation } from 'react-router-dom';

export default function Header() {

  const location = useLocation()  
  let match = useRouteMatch({
    path: location.pathname,
    exact: true
  });


  const active = false  ||  match ? "active" : ""

  return (
    <Container>
      <Content>
        <Linke to = "/cadastro" active={match.path === "/cadastro" ? active : ""}>  <img src={logo} alt="GYMPOINT"/> </Linke>
        <nav>
          <ul>
            <li> 
              <Linke to = "/alunos" active={match.path === "/alunos" ? active : ""} > ALUNOS </Linke> 
            </li>
            <li> 
              <Linke to = "/planos" active={match.path === "/planos" ? active : ""} > PLANOS  </Linke> 
            </li> 
            <li> 
              <Linke to = "/matriculas" active={match.path === "/matriculas" ? active : ""} > MATRICULAS </Linke> 
            </li> 
            <li> 
              <Linke to = "/pedidos" active= {match.path === "/pedidos" ? active : ""} > PEDIDOS DE AUXÍLIOS </Linke> 
            </li> 
          </ul>
        </nav>
        <Profile>
          <span> Gislaine Jéssica </span>
          <button> sair do sistema </button>
        </Profile>  
      </Content>
    </Container>
  );
}