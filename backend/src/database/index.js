import Sequelize from 'sequelize'
import User from '../app/models/User'
import Student from '../app/models/Student'
import Planos from '../app/models/Planos'
import Matricula from '../app/models/Matricula'
import Checkin from '../app/models/Checkin'
import Helper from '../app/models/Helper'

import DataConfig from '../config/database'

const models = [User, Student, Planos, Matricula, Checkin, Helper]

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
