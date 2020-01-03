import React from 'react';
import { useHistory} from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md'

import Button from '../Button';
import { InfoCadastro } from './styles';

export default function CadastroInfo({ title }) {
  const history = useHistory()

  const  back = () => {
    history.goBack()
  }

  const  salvar = ()=> {
    // Salvar dados no server
    history.goBack()
  }

  return (
    <InfoCadastro>
      <h2> {title|| "Cadastro"}  </h2>
      <div className="Botaos">
        <Button Icon={MdArrowBack} label={"Voltar"} action={back} type=""> </Button>
        <Button Icon={MdSave} label={"Salvar"} action={salvar} type="primary"> </Button>
      </div>
    </InfoCadastro>
  );
}
