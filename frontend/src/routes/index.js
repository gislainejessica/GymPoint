 
import React from 'react'
import { Switch } from 'react-router-dom'

/** 
 * Em vez de usar o Route diretamente do react-router-dom 
 * temos nossa propria classe para fazer o direcionamento
*/

import Route from './Route'

/** Paginas disponíveis para essa aplicação */

import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Auxilio from '../pages/Auxilio'
import Plan from '../pages/Plan'
import Matricula from '../pages/Matricula'

export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/alunos" component={Register} isPrivate/>

      <Route path="/pedidos" component={Auxilio} isPrivate/>
      <Route path="/planos" component={Plan} isPrivate />
      <Route path="/matriculas" component={Matricula} isPrivate />
    </Switch>
  )
}
