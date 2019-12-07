class HelperAnswerController{
	async store(req, res){
		return res.json({oi: 'store'})
	}
}

export default new HelperAnswerController()
