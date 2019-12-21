import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  nav {
    ul {
      display: flex;
      flex-direction: row;
      color: #999;
      font-weight: bold;

     li.active {
        color: #444;
     }
     li {
       margin: 10px;
     }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    color: #666666
  }

  button {
    color: #EE4D64;
    background: none;
    border: 0;
  }
`
