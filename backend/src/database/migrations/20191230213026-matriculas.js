'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('matriculas', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			start_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			end_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			price: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			student_id: {
				type: Sequelize.INTEGER,
				references: { model: 'students', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: true,
			},
			plan_id: {
				type: Sequelize.INTEGER,
				references: { model: 'planos', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: true,
			},

			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		})
	},

	down: queryInterface => {
		return queryInterface.dropTable('matriculas')
	},
}

