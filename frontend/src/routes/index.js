 
import React from 'react';
import { Switch } from 'react-router-dom';

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

import EditarA from '../pages/Student/EdicaoAluno'
import EditarM from '../pages/Matricula/EdicaoMatricula'
import EditarP from '../pages/Plan/EdicaoPlano'

//import Edicao from '../pages/Student/EdicaoAluno'


export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />
     
      <Route path="/alunos" component={Student} isPrivate/>
      <Route path="/pedidos" component={Auxilio} isPrivate/>
      <Route path="/planos" component={Plan} isPrivate />
      <Route path="/matriculas" component={Matricula} isPrivate />

      <Route path="/cadastro/alunos" component={CadastroA} isPrivate/>
      <Route path="/cadastro/planos" component={CadastroP} isPrivate/>
      <Route path="/cadastro/matriculas" component={CadastroM} isPrivate/>
      <Route path="/cadastro/pedidos" component={CadastroM} isPrivate/>


      <Route path="/editar/alunos" component={EditarA} isPrivate/>
      <Route path="/editar/planos" component={EditarP} isPrivate/>
      <Route path="/editar/matriculas" component={EditarM} isPrivate/>
      <Route path="/editar/pedidos" component={EditarM} isPrivate/>
    </Switch>
  )
}
