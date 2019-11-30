import Sequelize from 'sequelize'
import User from '../app/models/User'
import Student from '../app/models/Student'
import Planos from '../app/models/Planos'
import Matricula from '../app/models/Matricula'

import DataConfig from '../config/database'

const models = [User, Student, Planos, Matricula]

class Database {
	constructor() {
		this.init()
	}

	init() {
		this.connection = new Sequelize(DataConfig)

		models.map(model => {
			model.init(this.connection)
		})
		models.map(
			model => model.associate && model.associate(this.connection.models)
		)
	}
}
export default new Database()
