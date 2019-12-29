import React from 'react';
import Input from '../../../components/InputBox';
import Button from '../../../components/Button';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';

import { Container , InfoCadastro} from './styles';

export default function CadastroAluno() {
  const history = useHistory()
  const location = useLocation()  

  let match = useRouteMatch({
    path: location.pathname,
    exact: true
  });

  const  back = () => {
    if (match.path === "/cadastro/alunos"){
        history.push("/alunos")
    }
    if (match.path === "/cadastro/matriculas"){
      history.push("/matriculas")
    }
    if (match.path === "/cadastro/planos"){
      history.push("/planos")
    }
  }

  const  salvar = () => {
    // Salvar dados no server
    if (match.path === "/cadastro/alunos"){
        history.push("/alunos")
    }
    if (match.path === "/cadastro/matriculas"){
      history.push("/matriculas")
    }
    if (match.path === "/cadastro/planos"){
      history.push("/planos")
    }
  }

  return (
    <>
    <InfoCadastro>
      <h2> Cadastro de Aluno </h2>
      <div className="Botaos">
        <Button label={"Voltar"} action={back}> </Button>
        <Button label={"Salvar"} action={salvar}> </Button>
      </div>

    </InfoCadastro>
   

    <Container>
      <Input label={"NOME COMPLETO"} input={"Insira seu nome"}/>
      <Input label={"ENDEREÇO DE EMAIL"} input={"Insira seu email"} />
      
      <div className="blockend">
        <Input label={"IDADE"} />
        <Input label={"PESO (em kg)"} />
        <Input label={"ALTURA"} />
      </div>
    </Container>
  </>
  );
}
