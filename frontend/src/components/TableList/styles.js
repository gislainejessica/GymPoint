import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  padding-left: 120px;
  padding-right: 120px;
`;

export const Tabela = styled.table`
    height: fit-content;
    background: #fff;
    margin-top: 20px;
    padding: 30px;

  tr {
    height: 62px;
  }  
   
  thead th {
    color: #444;
    text-align: left;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 16px;
  }

  tbody td {
    width: 100%;
    color: #666;
    text-align: left;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    margin-top: 16px;

    button {
      background: none;
      font-size: 15px;
      padding: 0 5px 0 5px;
    }
    button.editar {
      color: #4D85EE;
    }

    button.apagar {
      color: #DE3B3B;
    }
  }
`;
