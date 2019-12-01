import * as Yup from 'yup'
import Planos from '../models/Planos'
import User from '../models/User'

class PlanController {
	async store(req, res) {
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
		const planos = await Planos.findAll()

		return res.json(planos)
	}

	async update(req, res) {
		const plan_id = req.params.id

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
		const plan_id = req.params.id

		const plano = await Planos.destroy({ where: { id: plan_id } })
		return res.json(plano)
	}
}

export default new PlanController()
