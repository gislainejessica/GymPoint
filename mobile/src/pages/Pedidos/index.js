import React from 'react';
import { Text, Image } from 'react-native';
import Header from '../../assets/header.png'
import Button from '../../components/Button'

import { Container } from './styles';

export default function Pedidos() {
  return (
    <Container>
    <Button onPress={console.log("oi")}>
      Novo Pedido de Auxílio
    </Button>
  </Container>  );
}
Pedidos.navigationOptions = ({ navigation }) => ({
  headerLayoutPreset: () => (
    <Image source={Header}/>
  )
})
