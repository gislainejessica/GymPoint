import * as Yup from 'yup'
import User from '../models/User'
import jwt from 'jsonwebtoken'

class SessionController {
	async store(req, res) {

		const { email, password } = req.body

		const user = await User.findOne({
			where: { email }
		})

		if (!user) {
			return res.status(400).json({ erro: 'Usuário não existe' })
		}

		// verificar se senha está batendo
		if (!(await user.checkPassword(password))) {
			return res.status(400).json({ error: 'Senha errada' })
		}

		const { id, name } = user
		// Retornar um token de autentificação
		return res.json({
			user: { id, name },
			token: jwt.sign({ id }, '75a2b341e34bbba06ef26e95124b6246', {
				expiresIn: '7d',
			}),
		})
	}
}

export default new SessionController()
