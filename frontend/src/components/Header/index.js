import React from 'react';
import logo from '../../assets/logoname.svg'
import { Container, Content } from './styles';


export default function Header() {
  return (
    <Container>
      <Content>
      <div>
          <img src={logo} alt="Gym"/>
      </div>

      <nav>
        <ul>
          <li> Alunos </li>
          <li> Planos </li>
          <li> Matriculas </li>
          <li> Pedidos de Auxilios </li>
        </ul>
      </nav>

      
      </Content>
    </Container>
  );
}