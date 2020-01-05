import Help from '../models/Helper'

class HelperAnswerController{
	// Responder uma pergunta de um usuário especifico
	async store(req, res){
		const { help_id } = req.params
		const { answer } = req.body

		const checkPergunta = await Help.findByPk(help_id)

		if (!checkPergunta){
			return res.status(400).json({message: "Id da Pergunta invalido"})
		}
		const resposta = {
			answer,
			answer_at: new Date()
		}
		const help = await Help.update(resposta, {
			where: { id: help_id }
		})

		return res.json(help)
	}
}

export default new HelperAnswerController()
