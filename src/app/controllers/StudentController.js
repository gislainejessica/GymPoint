import * as Yup from 'yup'
import Student from '../models/Student'
import User from '../models/User'

class StudentController {
	async store(req, res) {
		const { name, email, idade, peso, altura } = req.body
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
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			idade: Yup.number(),
			peso: Yup.number(),
			altura: Yup.number(),
		})

		if (!schema.isValid(req.body)) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}

		// Verificar se usuario existe
		const userExists = await User.findOne({ where: { email: req.body.email } })
		if (userExists) {
			return res.status(400).json({ error: 'email já está cadastrado' })
		}

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
		const { id } = req.params
		const admim_id = req.user_id

		// Verificar se é um admnistrador que está logado
		const user = await User.findByPk(admim_id)
		if (!user.admim) {
			return res.status(401).json({
				message: 'Usuario não é administrador, cadastro não pode ser realizado',
			})
		}

		// Validação das entradas
		const schema = await Yup.object().shape({
			name: Yup.string(),
			email: Yup.string()
				.email()
				.required(),
			idade: Yup.number(),
			peso: Yup.number(),
			altura: Yup.number(),
		})

		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}

		// Validação das mudanças
		const student = await Student.findByPk(id)

		// Verificar se email passado é diferente(quer trocar)
		if (email !== student.email) {
			// verificar se email novo já não existe na base de dados
			if (email === Student.findOne({ where: { email } })) {
				return res.status(400).json({ error: 'email já está cadastrado' })
			}
		}

		const newStudent = {
			id: student.id,
			name,
			email,
			idade,
			peso,
			altura,
		}

		await Student.update(newStudent, { where: { id } })

		return res.json(newStudent)
	}
}

export default new StudentController()
