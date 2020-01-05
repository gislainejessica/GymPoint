import React from 'react';
import { Image, Text } from 'react-native';

// import { Container } from './styles';

import Header from '../../assets/header.png'
export default function Chekin() {
  return (
    <Text> Checkin </Text>
 );
}

 Chekin.navigationOptions = ({ navigation }) => ({
  header: () => (
    <Image source={Header}/>
  )
})
