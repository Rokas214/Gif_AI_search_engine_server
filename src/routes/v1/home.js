const { dbConfig } = require("../../config");
const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const con = await mysql.createConnection(dbConfig);
		const [data] = await con.execute(`
        SELECT DISTINCT url
		FROM gif_history
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
