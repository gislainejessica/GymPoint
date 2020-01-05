import { subDays } from 'date-fns'
import { Op } from 'sequelize'
import Checkin from '../models/Checkin'
import Student from '../models/Student'

class CheckinController {

	async index(req, res) {

		const checkins = await Checkin.findAll()

		return res.json(checkins)
	}
	async show(req, res) {
		const { student_id } = req.params
		const checkStudent = await Student.findOne({ where: { id: student_id }})

		if (!checkStudent){
			return res.json({ message: "O ID do estudante não tem check-in no sitema" })
		}

		const checkins = await Checkin.findAndCountAll({ where: { student_id } })

		return res.json(checkins)
	}
	async store(req, res) {
		const { student_id } = req.params

		try {

			if (student_id !== await(Student.findByPk(student_id))){
				return res.json({ message: "O ID do estudante não está habilitado para check-in" })
			}
			// Verifcar se numero de checkins foi ultrapassado
			const numCheckin = await Checkin.findAndCountAll({
				where: {
					student_id,
					createdAt: {
						[Op.lt]: new Date(),
						[Op.gt]: subDays(new Date, 7)
					}
				}
			})

			if (numCheckin.count > 5){
				return res.json({ message: "Só pode realizar 5 check in na semana " })
			}

			await Checkin.create({ student_id })
		}
		catch(erro){
			return res.status(400).json({ error: "Deu ruim" })
		}

		return res.json({ student_id })
	}
}

export default new CheckinController()
