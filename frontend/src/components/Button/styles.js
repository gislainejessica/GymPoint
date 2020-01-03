
import styled from 'styled-components';

export const StyledButton = styled.button`
    background: ${props => (props.type === 'primary' ? '#ee4d64' : '#bbb')};
    color: #fff;
    font-family: Roboto-Bold sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 6px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.1s;

    width: 142px;
    height: 36px;
    margin-right: 16px;

    svg {
      margin: 0 10px 0 0;
    }
    &:hover {
      opacity: 0.8;
    }
`;


