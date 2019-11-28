import { Router } from 'express'
import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'
const auth = 1
const routes = Router()

routes.post('/sessions', SessionController.store)

// Cadastrar estudante
routes.post('/students', auth, StudentController.store)
// Listar estudantes
routes.get('/students', StudentController.index)
// Atualizar estudante
routes.put('/students/:id', StudentController.update)

export default routes
