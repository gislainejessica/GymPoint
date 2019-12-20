import Helper from '../models/Helper'
class HelperOrdersController {
	async index(req, res) {

		const pedidos = await Helper.findAll({order: ['id']})

		return res.json({ message: pedidos })
	}

	async show(req, res) {

		return res.json({oi: 'show'})
	}

	async store(req, res) {

		return res.json({oi: 'store'})
	}
}

export default new HelperOrdersController()
