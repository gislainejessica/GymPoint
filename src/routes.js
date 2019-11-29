import { Router } from 'express'
import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'
import PlanController from './app/controllers/PlanController'

import auth from './app/middlewares/auth'

const routes = Router()
// Login
routes.post('/sessions', SessionController.store)

// Cadastrar estudante
routes.post('/students', auth, StudentController.store)
// Listar estudantes
routes.get('/students', StudentController.index)
// Atualizar estudante
routes.put('/students/:id', auth, StudentController.update)

// Planos
routes.get('/planos', auth, PlanController.index)
routes.post('/planos', auth, PlanController.store)
routes.put('/planos/:id', auth, PlanController.update)
routes.delete('/planos/:id', auth, PlanController.delete)

export default routes
