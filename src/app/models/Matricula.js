import Sequelize, { Model } from 'sequelize'

class Matricula extends Model {
	static init(sequelize) {
		super.init(
			{
				start_date: Sequelize.DATE,
				end_date: Sequelize.DATE,
				price: Sequelize.NUMBER,
			},
			{
				sequelize,
			}
		)
		return this
	}

	static associate(models) {
		this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' })
		this.belongsTo(models.Planos, { foreignKey: 'plan_id', as: 'plano' })
	}
}

export default Matricula
