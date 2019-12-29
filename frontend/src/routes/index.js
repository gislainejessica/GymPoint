 
import React from 'react'
import { Switch } from 'react-router-dom'

/** 
 * Em vez de usar o Route diretamente do react-router-dom 
 * temos nossa propria classe para fazer o direcionamento
*/

import Route from './Route'

/** Paginas disponíveis para essa aplicação */

import SignIn from '../pages/SignIn'
import Student from '../pages/Student'
import Auxilio from '../pages/Auxilio'
import Plan from '../pages/Plan'
import Matricula from '../pages/Matricula'
import CadastroA from '../pages/Student/CadastroAluno'
import CadastroM from '../pages/Matricula/CadastroMatricula'
import CadastroP from '../pages/Plan/CadastroPlano'

//import Cadastro from '../pages/Student/EdicaoAluno'


export default function Routes() {
  return(
    <Switch>
      <Route path="/cadastro/alunos" exact component={CadastroA} isPrivate/>
      <Route path="/cadastro/planos" exact component={CadastroP} isPrivate/>
      <Route path="/cadastro/matriculas" exact component={CadastroM} isPrivate/>

      <Route path="/cadastro/pedidos" exact component={CadastroM} isPrivate/>

      <Route path="/" exact component={SignIn} />
      <Route path="/alunos" exact component={Student} isPrivate/>

      <Route path="/pedidos" exact component={Auxilio} isPrivate/>
      <Route path="/planos" exact component={Plan} isPrivate />
      <Route path="/matriculas" exact component={Matricula} isPrivate />
    </Switch>
  )
}
