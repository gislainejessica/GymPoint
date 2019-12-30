import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 120px;
  padding-right: 120px;
`;

export const Tabela = styled.table`
    width: 100%;
    height: fit-content;
    background: #fff;
    padding: 30px;
    margin-bottom: 30px;

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
