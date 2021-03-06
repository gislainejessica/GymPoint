import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  background: #fff;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

export const NavBar = styled.div`
  height: 64px;
  min-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
      display: flex;
      flex-direction: row;
      color: #999;
      font-weight: bold;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    color: #666666;
    margin-bottom: 2px;
  }
`;

export const NavLinke = styled(NavLink)`
    margin: 10px;
    display: flex;
    align-items: center;
    color: ${props => props.active ? '#444': '#999' };
    text-decoration: none;
    
    transition: opacity 0.2s;

    &:hover {
      opacity: ${props => props.active ? 1: 0.7 };
    }

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
`;

export const LogOut = styled.button`
  align-self: center;
  text-decoration: none;
  color: #EE4D64;
  font-size: 12px;
  background: none;

  transition: opacity 0.2s;

  &:hover {
    opacity: ${props => props.active ? 1: 0.7 };
  }
`;