const express = require("express");
const { dbConfig } = require("../../config");
const mysql = require("mysql2/promise");
const { isLoggedIn } = require("../../midleware");

const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
	try {
		const con = await mysql.createConnection(dbConfig);
		const [data] = await con.execute(`
        SELECT DISTINCT url
		FROM gif_history
		WHERE email=('${req.headers.email}')
		ORDER BY id DESC
		LIMIT 5;
        `);
		await con.end();
		return res.send(data);
	} catch (err) {
		return res.status(400).send(err);
	}
});

module.exports = router;
