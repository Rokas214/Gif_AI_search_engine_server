const { dbConfig } = require("../../config");
const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

router.post("/", async (req, res) => {
	let input = req.body;
	try {
		const con = await mysql.createConnection(dbConfig);
		const [data] = await con.execute(`
		SELECT url
		FROM gif_history
		ORDER BY id DESC
		LIMIT 1;
		`);
		await con.end();
		if (data[0].url === req.body.url) {
			return res.send("same");
		}
	} catch (err) {
		return res.status(400).send(err);
	}
	try {
		const con = await mysql.createConnection(dbConfig);
		const [data] = await con.execute(`
	        INSERT INTO gif_history (url,email)
	        VALUES ('${input.url}', '${req.headers.email}')
	        `);
		await con.end();
		return res.send(data);
	} catch (err) {
		return res.status(400).send(err);
	}
});

module.exports = router;
