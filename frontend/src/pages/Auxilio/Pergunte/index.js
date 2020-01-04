import React from 'react';
import Button from '../../../components/Button';

export default function Pergunte() {

  return (
    <>
      <h2> Pergunta do Aluno </h2>
      <div>
        <h3> Aqui a pergunta em si </h3>
      </div>
      <h2> Sua resposta </h2>
      <input type="text"/>
      <Button label="Responder Aluno" type="primary"/>

    </>
  );
}
