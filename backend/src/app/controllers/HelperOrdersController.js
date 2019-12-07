
class HelperOrdersController {
	async index(req, res) {
		return res.json({oi: 'index'})
	}

	async show(req, res) {
		return res.json({oi: 'show'})
	}

	async store(req, res) {
		return res.json({oi: 'store'})
	}
}

export default new HelperOrdersController()
