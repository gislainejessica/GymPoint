import styled from 'styled-components'

export const Container = styled.View`
  height: 46px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  flex: 1;
  font-size: 15px;

  background: #fff;
  border: 1px solid #ddd;
`;
