import Sequelize, { Model } from 'sequelize'

class Planos extends Model {
	static init(sequelize) {
		super.init(
			{
				title: Sequelize.STRING,
				duration: Sequelize.NUMBER,
				price: Sequelize.NUMBER,
			},
			{
				sequelize,
			}
		)
		return this
	}
}

export default Planos
