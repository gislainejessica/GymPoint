import React, { useRef, useState }  from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '../../assets/logo.png';

import { Container, FormInput, Form, LoginButton, Image} from './styles';

export default function SignIn() {
  const passWordRef = useRef()
  const dispatch = useDispatch()

  const [identification, setIdentification] = useState('')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    console.tron.log("sub")
    dispatch(signInRequest(identification))
  }

  return (
    <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            ref={passWordRef}
            placeholder="Sua Id de Identificação"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={identification}
            onChangeText={setIdentification}
          />
          <LoginButton loading={loading} onPress={handleSubmit}>
            Entrar no Sistema
          </LoginButton>
          <TouchableOpacity onPress={handleSubmit}>
            <Text>entre </Text>
          </TouchableOpacity>
          </Form>
    </Container>
  );
}
