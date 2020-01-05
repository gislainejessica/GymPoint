import * as Yup from 'yup';
import Helper from '../models/Helper';
import Student from '../models/Student';

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
		const {student_id} = req.params

		const pedidos = await Helper.findAll({
			where:{ student_id },
			order: ['id'],
			include:[{
				model: Student,
				as: "student",
				attributes: ["name"]
			}]
		})

		return res.json(pedidos)
	}
	// Cadastro de Pedidos por um estudante
	async store(req, res) {
		const { student_id } = req.params
		const { question,answer, answer_at } = req.body

		const schema = await Yup.object().shape({
			question: Yup.string().required(),
		})

		if (!schema.isValid(req.body)) {
			return res.status(400).json({ message: 'Falha na validação de dados' })
		}
		const novo = {
			question,
			student_id
		}
		await Helper.create(novo)

		return res.json(novo)
	}
}

export default new HelperOrdersController()
