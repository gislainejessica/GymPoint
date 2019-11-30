import Matricula from '../models/Matricula'
import Student from '../models/Student'
import Planos from '../models/Planos'

class MatriculaController {
	async index(req, res) {
		const { page } = req.query

		const Matriculas = await Matricula.findAll({
			order: ['start_date'],
			limit: 20,
			offset: (page - 1) * 20,
			attributes: ['start_date', 'end_date', 'price'],
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

		return res.json(Matriculas)
	}
	async store(req, res) {
		const { start_date, plan_id, student_id } = req.body

		await Matricula.create(req.body)

		res.json(req.body)
	}
	async update(req, res) {}
	async delete(req, res) {}
}

export default new MatriculaController()
