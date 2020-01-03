import React from 'react';
import { StyledButton } from './styles';

export default function Button({label, action, type, Icon,...rest}) {
  return (
    <StyledButton type={type} onClick={action} {...rest}>
      {Icon && <Icon size={24} color="#fff" />} 
      <span> {label || 'Button'} </span>
    </StyledButton>
  );
}
