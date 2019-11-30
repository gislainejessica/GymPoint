import Sequelize, { Model } from 'sequelize'

class Student extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				idade: Sequelize.NUMBER,
				peso: Sequelize.NUMBER,
				altura: Sequelize.NUMBER,
			},
			{
				sequelize,
			}
		)
		return this
	}
	static associate(models) {}
}

export default Student
