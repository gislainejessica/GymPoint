import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 30px;
  padding-right: 30px;
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  align-items: flex-start;
`;

export const Entrada = styled.input`
  width: 232px;
  height: 36px;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const Label = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color : #444;
  margin-bottom: 6px;
`;
