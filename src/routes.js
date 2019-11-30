import { Router } from 'express'
import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'
import PlanController from './app/controllers/PlanController'
import MatriculaController from './app/controllers/MatriculaController'

import auth from './app/middlewares/auth'

const routes = Router()

/** Login */

routes.post('/sessions', SessionController.store)

/** Estudantes */

routes.get('/students', StudentController.index)
routes.post('/students', auth, StudentController.store)
routes.put('/students/:id', auth, StudentController.update)

routes.delete('/students/:id', auth, StudentController.delete)

/** Planos */

routes.get('/planos', auth, PlanController.index)
routes.post('/planos', auth, PlanController.store)
routes.put('/planos/:id', auth, PlanController.update)
routes.delete('/planos/:id', auth, PlanController.delete)

/** Matriculas */

routes.get('/matriculas', auth, MatriculaController.index)
routes.post('/matriculas', auth, MatriculaController.store)
routes.put('/matriculas/:student_id', auth, MatriculaController.update)
routes.delete('/matriculas/:student_id', auth, MatriculaController.delete)

export default routes
