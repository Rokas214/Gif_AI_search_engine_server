require("dotenv").config();

module.exports = {
	port: process.env.PORT || 3000,
	jwt_secret: process.env.JWT_SECRET,
	api_key: process.env.API_KEY,
	service_url: process.env.SERVICE_URL,

	dbConfig: {
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		port: process.env.DB_PORT,
		database: process.env.DATABASE,
	},
};
