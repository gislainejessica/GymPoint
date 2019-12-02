import Sequelize, { Model } from 'sequelize'

class Checkin extends Model {
	static init(sequelize) {
		super.init(
			{
				student_id: Sequelize.NUMBER,
			},
			{
				sequelize,
			}
		)
		return this
	}
	static associate(models) {
		this.belongsTo(models.Student, { foreignKey: 'id', as: 'student' })
	}
}

export default Checkin
