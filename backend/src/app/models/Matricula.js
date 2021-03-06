import Sequelize, { Model } from 'sequelize'
import { isBefore, isAfter } from 'date-fns'
class Matricula extends Model {
	static init(sequelize) {
		super.init(
			{
				start_date: Sequelize.DATE,
				end_date: Sequelize.DATE,
				price: Sequelize.NUMBER,
				active: {
					type: Sequelize.BOOLEAN,
					allowNull: false,
					defaultValue: true,
				},
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


/**
 * 	type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
						'start_date',
						'end_date',
					]),
					get() {
						return (
							isBefore(this.get('start_date'), new Date()) &&
							isAfter(this.get('end_date'), new Date())
						)
					},
 */
