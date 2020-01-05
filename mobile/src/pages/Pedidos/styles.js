import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const Checkins = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
  margin-bottom: 25px;
`;
export const Title = styled.View`
  flex-direction:row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const InfoCheck = styled.View`
  flex:1;
  flex-direction:column;
  justify-content: flex-start;
  padding: 15px 20px;
  height: 150px;

  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 5px 0;
  background-color: #fff;
`;

export const Pedido = styled.Text`
  font-size: 14px;
  color: #666;
`;
