import { isWithinInterval, subDays } from 'date-fns'
import Checkin from '../models/Checkin'
import Student from '../models/Student'

class CheckinController {
	async show(req, res) {
		const { student_id } = req.params
	}

	async store(req, res) {
		const { student_id } = req.params

		// Verificar se student is true
		const checkStudent = await Student.findByPk(student_id)

		if (!checkStudent) {
			return res.status(404).json({ message: 'Estudante não encotrado' })
		}

		// Verifcar se numero de checkins foi ultrapassado
		const dataSeven = isWithinInterval(new Date(), 7)(
			formatISO(checkStudent.created_at),
			dataSeven
		)
		const check = {
			id: student_id,
		}
		await Checkin.create(check)

		return res.json(check)
	}
}

export default new CheckinController()

// 5 checkins dentro de um período de 7 dias corridos.
