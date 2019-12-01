import * as Yup from 'yup'
import { addMonths, parseISO } from 'date-fns'

import Matricula from '../models/Matricula'
import Student from '../models/Student'
import Planos from '../models/Planos'
import User from '../models/User'

class MatriculaController {
	async index(req, res) {
		const { page } = req.query

		const matriculas = await Matricula.findAll({
			order: ['start_date'],
			limit: 20,
			offset: (page - 1) * 20,
			attributes: ['id', 'start_date', 'end_date', 'price'],
			include: [
				{
					model: Student,
					as: 'student',
					attributes: ['name'],
				},
				{
					model: Planos,
					as: 'plano',
					attributes: ['title', 'price', 'duration'],
				},
			],
		})

		return res.json(matriculas)
	}
	async store(req, res) {
		const { start_date, plan_id, student_id } = req.body

		// Validação das entradas
		const schema = await Yup.object().shape({
			student_id: Yup.number().required(),
			plan_id: Yup.number().required(),
			start_date: Yup.date().required(),
		})

		if (!(await schema.isValid(req.body))) {
			return res.status(401).json({ message: 'Entrada inválida' })
		}

		const { duration, price: price_plan } = await Planos.findByPk(plan_id)
		const hourStart = parseISO(start_date)

		const newMatricula = {
			start_date,
			end_date: addMonths(hourStart, duration),
			price: duration * price_plan,
			plan_id,
			student_id,
		}

		await Matricula.create(newMatricula)

		res.json(newMatricula)
	}

	async update(req, res) {}

	async delete(req, res) {
		const { id } = req.params
		const matricula = await Matricula.destroy({ where: { id } })
		return res.json(matricula)
	}
}

export default new MatriculaController()
