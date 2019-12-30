import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logoname.svg';
import { Container, Content, Profile, Linke, LogOut } from './styles';


export default function Header() {
  const dispatch = useDispatch()
  const location = useLocation() 
  const nome = useSelector(state => state.user.profile.name)

  let match = useRouteMatch({
    path: location.pathname,
    exact: true
  });

  const active = false  ||  match ? "active" : ""
  
  function handleSignOut(){
    dispatch(signOut())
  }

  return (
    <Container>
      <Content>
        <Linke to = "/alunos">  <img src={logo} alt="GYMPOINT"/> </Linke>
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
          <span> {nome} </span>
          <LogOut onClick={handleSignOut}> 
            Sair do sistema 
          </LogOut> 
        </Profile> 
      </Content>
    </Container>
  );
}