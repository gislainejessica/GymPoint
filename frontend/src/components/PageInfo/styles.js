import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 104px;
  padding-bottom: 30px;
  
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  align-items: center;
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
