import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 30px;
  padding-right: 30px;
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  align-items: flex-start;

  input {
    width:232px;
    height:36px;
    border: 0.1 solid #ddd;
    padding-left: 5px;
  }
`;

export const Label = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color : #444;
  margin-bottom: 6px;
`;
