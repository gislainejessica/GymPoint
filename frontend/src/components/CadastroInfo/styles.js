import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  padding-top: 30px;
  padding-left: 120px;
  padding-right: 104px;
  padding-bottom: 30px;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: row;
  
  input {
    width: 216px;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding-left: 10px;
  }
`;


export const InfoCadastro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 30px;
  padding-left: 120px;
  padding-right: 120px;

  div {
    display: flex;
    flex-direction: row;
  }
`;

