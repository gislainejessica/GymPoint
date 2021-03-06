import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 120px;
  margin-right: 120px;
  padding: 30px;
  background: #fff;

  flex-direction: column;

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
