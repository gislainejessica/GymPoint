import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const Checkins = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 }
})`
  margin-top: 10px;
  margin-bottom: 25px;

`;
export const InfoCheck = styled.View`
  flex:1;
  flex-direction:row;
  justify-content: space-between;
  padding: 15px 20px;

  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 5px 0;
  background-color: #fff;


`
