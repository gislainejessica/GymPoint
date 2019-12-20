import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 448px;
  width: 360px;
  background: #fff;

`;

export const Banner = styled.div`
  height: 100px;
  width: 153px;
  margin-bottom: 10px;
`
export const Formulario = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 30px;

  label {
    font-weight: bold;
    font-size: 14px;
  }

  input {
    width:300px;
    height:45px;
    border-radius: 6px;
  }

  button {
    background: #EE4D64;
    width:300px;
    height:45px;
    color: #fff;
    font-size: 16px;
    border-radius: 6px;
  }
`
