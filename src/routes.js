import { Router } from 'express'
import SessionController from './app/controllers/SessionController'
import StudentController from './app/controllers/StudentController'
import PlanController from './app/controllers/PlanController'

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
routes.get('/matriculas', auth, PlanController.index)
routes.post('/matriculas', auth, PlanController.store)
routes.put('/matriculas/:id', auth, PlanController.update)
routes.delete('/matriculas/:id', auth, PlanController.delete)

export default routes
