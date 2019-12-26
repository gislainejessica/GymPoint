import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 30px;
    padding-left: 120px;
    padding-right: 120px;
`;

export const Side = styled.div`
  button {
    background: #EE4D64;
    width: 142px;
    height: 36px;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    margin-right: 16px;
  }

  input {
    width: 232px;
    height: 36px;
    border: 1 solid #ddd;
    padding-left: 5px;
  }
`;

export const PageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.table`

    min-width: 1200px;
    height: 542px;
    background: #fff;

    margin-top: 20px;
    padding: 30px;
   
  thead th {
    color: #444;
    text-align: left;
    font-weight: bold;
    font-size: 16px;
  }

  tbody  {
    tr:hover {background-color: #f5f5f5;}
  }

  tbody td {
    width: 100%;
    color: #666;
    text-align: left;
    border-bottom: 1px solid #eee;
    font-size: 16px;

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
