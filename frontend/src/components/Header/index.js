import React from 'react';
import logo from '../../assets/logoname.svg';
import { Container, Content, Profile, Linke } from './styles';
import { Link } from 'react-router-dom';


export default function Header({history}) {
  return (
    <Container>
      <Content>
        
        <Linke to = "/cadastro">  <img src={logo} alt="GYMPOINT"/> </Linke>
       
        <nav>
          <ul>
            <li className="active"> 
              <Linke to = "/alunos"> ALUNOS </Linke> 
            </li>
            <li> 
              <Linke to = "/planos"> PLANOS  </Linke> 
            </li> 
            <li> 
              <Linke to = "/matriculas"> MATRICULAS </Linke> 
            </li> 
            <li> 
              <Linke to = "/pedidos"> PEDIDOS DE AUXÍLIOS </Linke> 
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