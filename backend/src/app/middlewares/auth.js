import jwt from 'jsonwebtoken'
import { promisify } from 'util'

export default async (req, res, next) => {
	const authtoken = req.headers.authorization

	if (!authtoken) {
		return res.status(400).json({ message: 'Precisa passar um token' })
	}

	const [, token] = authtoken.split(' ')

	try {
		const decoded = await promisify(jwt.verify)(
			token,
			'75a2b341e34bbba06ef26e95124b6246'
		)
		req.user_id = decoded.id
		next()
	} catch (error) {
		return res.status(401).json({ message: 'Token inválido' })
	}
}
