import * as Yup from 'yup'
import bcrypt from 'bcryptjs'
import User from '../models/User'

class UserController {
	async store(req, res) {
		// Validação das entradas
		const schema = await Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			password: Yup.number()
				.required()
				.min(6),
			admim: Yup.boolean(),
		})

		if (!schema.isValid(req.body)) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}

		// Verificar se usuario existe
		const userExists = await User.findOne({ where: { email: req.body.email } })
		if (userExists) {
			return res.status(400).json({ error: 'email já está cadastrado' })
		}
		const password_hash = bcrypt.hashSync(req.body.password, 8)
		const novo = {
			name: req.body.name,
			email: req.body.email,
			password_hash,
			adim: req.body.adim,
		}

		await User.create(novo)
		return res.json(novo)
	}
	async index(req, res) {
		const users = await User.findAll()
		return res.json(users)
	}
	async update(req, res) {
		const { name, email } = req.body
		const { id: admim_id } = req.params

		// Validação das entradas
		const schema = await Yup.object().shape({
			name: Yup.string(),
			email: Yup.string()
				.email()
				.required(),
			admim: Yup.boolean(),
		})

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}

		// Validação das mudanças
		const { id } = await User.findByPk(admim_id)

		// Verificar se email passado é diferente(quer trocar)
		if (email !== User.email) {
			// verificar se email novo já não existe na base de dados
			if (email === User.findOne({ where: { email } })) {
				return res.status(400).json({ error: 'email já está cadastrado' })
			}
		}

		const newUser = {
			id,
			name,
			email,
			idade,
			peso,
			altura,
		}

		await User.update(newUser, { where: { id } })

		return res.json(newUser)
	}
	async delete(req, res) {
		const { id } = req.params

		const user = await User.destroy({ where: { id } })

		return res.json(user)
	}
}

export default new UserController()
