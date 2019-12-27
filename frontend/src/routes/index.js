 
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
//import Cadastro from '../pages/Student/CadastroAluno'
import Cadastro from '../pages/Matricula/EdicaoMatricula'


export default function Routes() {
  return(
    <Switch>
      <Route path="/cadastro" component={Cadastro} isPrivate/>

      <Route path="/" exact component={SignIn} />
      <Route path="/alunos" component={Student} isPrivate/>

      <Route path="/pedidos" component={Auxilio} isPrivate/>
      <Route path="/planos" component={Plan} isPrivate />
      <Route path="/matriculas" component={Matricula} isPrivate />
    </Switch>
  )
}
