import React from 'react';
import logo from '../../assets/Login.svg'
import { Container, Banner, Formulario } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Banner> <img src={logo} alt="Login"/> </Banner>
      <Formulario>
          <label htmlFor=""> SEU EMAIL </label>
          <input type="text" placeholder="exemplo@email.com"/>
          
          <label htmlFor=""> SUA SENHA </label>
          <input type="text"  placeholder="********"/>
          <button type="button"> Entrar no Sistema </button>
      </Formulario>
    </Container>
  );
}
