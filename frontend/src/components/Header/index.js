import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logoname.svg';
import { Container, NavBar, Profile, NavLinke, LogOut } from './styles';


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
      <NavBar>
        <NavLinke to = "/alunos"> 
          <img src={logo} alt="GYMPOINT"/> 
        </NavLinke>
        <nav>
          <NavLinke to = "/alunos" active={match.path.includes("/alunos")  ? active : ""} >
            ALUNOS 
          </NavLinke> 
          <NavLinke to = "/planos" active={match.path.includes("/planos")  ? active : ""} > 
            PLANOS  
          </NavLinke> 
          <NavLinke to = "/matriculas" active={match.path.includes("/matriculas") ? active : ""} > 
            MATRICULAS 
          </NavLinke> 
          <NavLinke to = "/pedidos" active= {match.path.includes("/pedidos") ? active : ""} > 
            PEDIDOS DE AUXÍLIOS 
          </NavLinke> 
        </nav>
        <Profile>
          <span> {nome} </span>
          <LogOut onClick={handleSignOut}> 
            Sair do sistema 
          </LogOut> 
        </Profile> 
      </NavBar>
    </Container>
  );
}