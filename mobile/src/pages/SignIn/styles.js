import styled from 'styled-components/native';
import { Platform } from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'


export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`

export const Form = styled.View`
  align-self: stretch;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`

export const LoginButton = styled(Button)`
  margin-top: 5px;
`;

export const SignText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Image = styled.Image`
  width: 123px;
  height: 80px;
  margin: 20px;
`;
