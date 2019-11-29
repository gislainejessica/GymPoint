import * as Yup from 'yup'
import Planos from '../models/Planos'
import User from '../models/User'

class PlanController {
	async store(req, res) {
		const id = req.user_id

		// Verificar se é um admnistrador que está logado
		const user = await User.findByPk(id)
		if (!user.admim) {
			return res.status(401).json({
				message: 'Usuario não é administrador, cadastro não pode ser realizado',
			})
		}

		// Validação das entradas
		const schema = await Yup.object().shape({
			title: Yup.string().required(),
			duration: Yup.number().required(),
			price: Yup.number().required(),
		})

		if (!schema.isValid(req.body)) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}

		await Planos.create(req.body)

		return res.json(req.body)
	}
	async index(req, res) {
		const id = req.user_id

		// Verificar se é um admnistrador que está logado
		const user = await User.findByPk(id)
		if (!user.admim) {
			return res.status(401).json({
				message: 'Usuario não é administrador, cadastro não pode ser realizado',
			})
		}

		const planos = await Planos.findAll()

		return res.json(planos)
	}
	async update(req, res) {
		const id = req.user_id
		const plan_id = req.params.id

		// Verificar se é um admnistrador que está logado
		const user = await User.findByPk(id)
		if (!user.admim) {
			return res.status(401).json({
				message: 'Usuario não é administrador, cadastro não pode ser realizado',
			})
		}

		// Validação das entradas
		const schema = await Yup.object().shape({
			title: Yup.string().required(),
			duration: Yup.number().required(),
			price: Yup.number().required(),
		})

		if (!schema.isValid(req.body)) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}

		await Planos.update(req.body, { where: { id: plan_id } })

		return res.json(req.body)
	}
	async delete(req, res) {
		const id = req.user_id
		const plan_id = req.params.id

		// Verificar se é um admnistrador que está logado
		const user = await User.findByPk(id)
		if (!user.admim) {
			return res.status(401).json({
				message: 'Usuario não é administrador, cadastro não pode ser realizado',
			})
		}
		const plano = await Planos.destroy({ where: { id: plan_id } })
		return res.json(plano)
	}
}

export default new PlanController()
