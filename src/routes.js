import { Router } from 'express'
import SessionController from './app/controllers/SessionController'

const routes = Router()

routes.get('/', (req, res) => {
	res.json({ oi: 'ói' })
})
routes.post('/sessions', SessionController.store)

export default routes
