import User from '../models/User'

export default async (req, res, next) => {
	try {
		const admim_id = req.user_id

		// Verificar se é um admnistrador que está logado
		const user = await User.findByPk(admim_id)
		if (!user.admim) {
			return res.status(401).json({
				message: 'Usuario não é administrador',
			})
		}
		next()
	} catch (error) {
		return res.status(401).json({ message: 'Token inválido' })
	}
}
