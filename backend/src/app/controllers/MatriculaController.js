import * as Yup from 'yup'
import { addMonths, parseISO } from 'date-fns'

import Matricula from '../models/Matricula'
import Student from '../models/Student'
import Planos from '../models/Planos'
import User from '../models/User'
// 			offset: (page - 1) * 20,			limit: 20,
class MatriculaController {
	async index(req, res) {
		const { page } = req.query

		const matriculas = await Matricula.findAll({
			order: ['start_date'],
			attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
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
		const { start_date, plan_id, student_id, active } = req.body

		// Validação das entradas
		const schema = await Yup.object().shape({
			student_id: Yup.number().required(),
			plan_id: Yup.number().required(),
			start_date: Yup.date().required(),
			active: Yup.boolean().required(),
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
			active
		}

		await Matricula.create(newMatricula)

		return res.json(newMatricula)
	}

	async update(req, res) {
		return res.json({oi: "update"})
	}

	async delete(req, res) {
		const { id } = req.params
		const matricula = await Matricula.destroy({ where: { id } })
		return res.json(matricula)
	}
}

export default new MatriculaController()
