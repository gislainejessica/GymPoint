import Sequelize, { Model } from 'sequelize'

class Matricula extends Model {
	static init(sequelize) {
		super.init(
			{
				start_date: Sequelize.DATE,
				end_date: Sequelize.DATE,
				price: Sequelize.NUMBER,
				student_id: Sequelize.NUMBER,
				plan_id: Sequelize.NUMBER,
			},
			{
				sequelize,
			}
		)
		return this
	}
}

export default Matricula
