"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Blogs", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			coverImg: {
				type: Sequelize.STRING,
			},
			quote: {
				type: Sequelize.STRING,
			},
			date: {
				type: Sequelize.DATE,
			},
			content: {
				type: Sequelize.TEXT,
			},
			slug: {
				type: Sequelize.STRING,
			},
			topicID: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
		// await queryInterface.addColumn("Blogs", "testID", {
		// 	type: Sequelize.INTEGER,
		// 	// references: {
		// 	//   model: "User",
		// 	//   key: "id",
		// 	// },
		// });
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Blogs");
	},
};