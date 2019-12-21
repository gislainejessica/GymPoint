import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 30px;
    padding-left: 120px;
    padding-right: 120px;
`;

export const Side = styled.div`
  button {
    background: #EE4D64;
    width:142px;
    height:36px;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
  }

  input {
    margin-left: 16px;
    width:232px;
    height:36px;
    border:1 solid #ddd;
    padding-left: 5px;
  }
`;

export const PageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  align-items: center;
`;

export const Title = styled.h2`
  color : #444;
`;
