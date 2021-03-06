import styled from 'styled-components'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 46px;
  background-color: #EE4E62;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
