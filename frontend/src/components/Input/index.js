import React from 'react';
import { Entrada } from './styles';

export default function InputBox({ input }) {
  return (    
      <Entrada type="text" placeholder={input}/>
  );
}
