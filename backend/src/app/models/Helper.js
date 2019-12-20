import Sequelize, { Model } from 'sequelize'

class Helper extends Model {
	static init(sequelize) {
		super.init(
			{
				answer_at: Sequelize.DATE,
				answer: Sequelize.STRING,
				question: Sequelize.STRING,
			},
			{
				sequelize,
			}
		)
		return this
	}

	static associate(models) {
		this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' })
	}
}
export default Helper


