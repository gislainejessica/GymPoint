import { Router } from 'express'
import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'
import PlanController from './app/controllers/PlanController'
import MatriculaController from './app/controllers/MatriculaController'
import UserController from './app/controllers/UserController'

import auth from './app/middlewares/auth'
import admim from './app/middlewares/admin'

const routes = Router()

/** Usuarios */
routes.get('/users', admim, UserController.index)
routes.post('/users', admim, UserController.store)
routes.put('/users', admim, UserController.update)
routes.delete('/users', admim, UserController.delete)

/** Login */

routes.post('/sessions', SessionController.store)

/** Estudantes */

routes.get('/students', StudentController.index)
routes.post('/students', auth, admim, StudentController.store)
routes.put('/students/:id', auth, admim, StudentController.update)
routes.delete('/students/:id', auth, admim, StudentController.delete)

/** Planos */

routes.get('/planos', auth, PlanController.index)
routes.post('/planos', auth, admim, PlanController.store)
routes.put('/planos/:id', auth, admim, PlanController.update)
routes.delete('/planos/:id', auth, admim, PlanController.delete)

/** Matriculas */

routes.get('/matriculas', auth, admim, MatriculaController.index)
routes.post('/matriculas', auth, admim, MatriculaController.store)
routes.put('/matriculas/:id', auth, admim, MatriculaController.update)
routes.delete('/matriculas/:id', auth, admim, MatriculaController.delete)

export default routes
