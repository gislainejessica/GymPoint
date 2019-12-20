import React from 'react';
import logo from '../../assets/logoname.svg'
import { Container, Content, Profile } from './styles';


export default function Header() {
  return (
    <Container>
      <Content>
      <div>
          <img src={logo} alt="Gym"/>
      </div>

      <nav>
        <ul>
          <li className="active"> ALUNOS </li>
          <li> PLANOS </li>
          <li> MATRICULAS </li>
          <li> PEDIDOS DE AUXÍLIOS </li>
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