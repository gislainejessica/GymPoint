import React from 'react';
import { Text } from 'react-native';

import logo from '../../assets/logo.png';

import { Container, Image, Input, Button, Texto} from './styles';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />
      <Text> Informe seu Id de Cadastro </Text>

      <Input placeholder="Informe seu ID de cadastro"/>
      <Button>
        <Texto> Entrar no Sistema </Texto>
      </Button>
    </Container>
  );
}
