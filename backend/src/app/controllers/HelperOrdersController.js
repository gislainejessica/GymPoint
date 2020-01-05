import Helper from '../models/Helper';
import Student from '../models/Student';
import * as Yup from 'yup'

// {order: ['id']}
class HelperOrdersController {
	// Listagem de Auxilio sem resposta
	async index(req, res) {
		const pedidos = await Helper.findAll({
			order: ['id'],
			include:[{
				model: Student,
				as: "student",
				attributes: ["name"]
			}]
		})

		return res.json(pedidos)
	}
	// Listagem de Pedidos de ajuda de um estudante especifico
	async show(req, res) {

		return res.json({oi: 'show'})
	}
	// Cadastro de Pedidos por um estudante
	async store(req, res) {
		const { student_id } = req.params
		const { question,answer, answer_at } = req.body

		const schema = await Yup.object().shape({
			question: Yup.string().required(),
			answer: Yup.string(),
			answer_at: Yup.date(),
		})

		if (!schema.isValid(req.body)) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}
		const novo = {
			question,
			answer,
			answer_at,
			student_id
		}
		await Helper.create(novo)

		return res.json(novo)
	}
}

export default new HelperOrdersController()
