import { Router } from 'express'
import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'
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

export default routes
