import React from 'react';
import Input from '../../../components/InputBox';
import Button from '../../../components/Button';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';


import { Container , InfoCadastro} from './styles';

export default function CadastroPlanp() {

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
      <h2> Cadastro de Matrícula </h2>
      <div className="Botaos">
        <Button label={"Voltar"}action={back}> </Button>
        <Button label={"Salvar"}action={salvar} type="primary"> </Button>
      </div>
    </InfoCadastro>
   
    <Container>
      <Input label={"ALUNO"} />
      <div className="blockend">
        <Input label={"PLANO"} />
        <Input label={"DATA DE INÍCIO"} />
        <Input label={"DATA TÉRMINO"} />
        <Input label={"VALOR FINAL"} />

      </div>
    </Container>
  </>
  );
}
