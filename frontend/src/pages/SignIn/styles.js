import styled from 'styled-components';
import { Form } from '@rocketseat/unform';


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
  margin-bottom: 10px;

  img {
    height: 100px;
    width: 153px;
  }
`;

export const Formulario = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 30px;

  label {
    margin-top: 15px;
    margin-bottom: 10px;

    font-weight: bold;
    font-size: 14px;
  }

  input {
    width: 300px;
    height: 45px;
    border-radius: 6px;
    padding-left: 15px;
    border: 1px solid #ddd;

    ::placeholder {
      color: #999 ;
    }
  }

  button {
    margin-top: 20px;
    width:300px;
    height:45px;
    color: #fff;
    font-size: 16px;
    border-radius: 6px;
    background: #EE4D64;
  }
`;
