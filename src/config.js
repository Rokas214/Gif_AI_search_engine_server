require("dotenv").config();

module.exports = {
	port: process.env.PORT || 3000,
	jwt_secret: "rokas123",
	dbConfig: {
		host: "sql11.freemysqlhosting.net",
		user: "sql11518356",
		password: "YSxfC1asJA",
		port: 3306,
		database: "sql11518356",
	},
};
