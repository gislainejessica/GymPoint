import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 120px;
  margin-right: 120px;
  padding: 30px;
  background: #fff;

  flex-direction: column;

  div.blockend {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const InfoCadastro = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
  justify-content: space-between;

  padding-top: 30px;
  padding-left: 120px;
  padding-right: 120px;

  div {
    display: flex;
    flex-direction: row;
  }

`
