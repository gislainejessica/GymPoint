import Helper from '../models/Helper';
import Student from '../models/Student';

// {order: ['id']}
class HelperOrdersController {
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
	async show(req, res) {

		return res.json({oi: 'show'})
	}

	async store(req, res) {

		return res.json({oi: 'store'})
	}
}

export default new HelperOrdersController()
