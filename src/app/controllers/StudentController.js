import Student from '../models/Student'

class StudentController {
	async store(req, res) {
		const { name, email, idade, peso, altura } = req.body

		const newStudent = {
			name,
			email,
			idade,
			peso,
			altura,
		}

		await Student.create(newStudent)

		return res.json(newStudent)
	}

	async index(req, res) {
		const students = await Student.findAll()
		return res.json(students)
	}

	async update(req, res) {
		const { name, email, idade, peso, altura } = req.body
		const { id } = req.params.id

		const newStudent = {
			name,
			email,
			idade,
			peso,
			altura,
		}

		await Student.update()

		return res.json(newStudent)
	}
}

export default new StudentController()
