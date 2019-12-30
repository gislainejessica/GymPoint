import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/Login.svg';
import { Container, Banner, Formulario } from './styles';

// Para validação das entradas de Login
const schema = Yup.object().shape({
  email: Yup.string().email('Insira um email válido').required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória')
});


export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)  

  function handleSubmit({email, password}){
    dispatch(signInRequest(email, password))
  }

  return (
    <Container>
      <Banner> 
        <img src={logo} alt="Login"/> 
      </Banner>

      <Formulario schema={schema} onSubmit={handleSubmit}>
          <label htmlFor=""> SEU EMAIL </label>
          <Input name="email" type="email" placeholder="Seu e-mail"/>
          <label htmlFor=""> SUA SENHA </label>
          <Input name="password" type="password" placeholder="Sua senha secreta"/>
          <button type="submit">{loading ? 'Carregando...' : 'Entrar no Sistema' }</button>
      </Formulario>
      
    </Container>
  );
}
