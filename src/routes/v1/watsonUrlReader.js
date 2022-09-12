const express = require("express");
const router = express.Router();
const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
	version: "2022-04-07",
	authenticator: new IamAuthenticator({
		apikey: "vwPLAEce1W7w7vYEzXbqlf-Mge_loZE9Yf7pDZlpDKoB",
	}),
	serviceUrl:
		"https://api.eu-de.natural-language-understanding.watson.cloud.ibm.com/instances/6c94ff95-22cc-4c85-bfb7-d6f55e1f3522",
});

router.post("/", async (req, res) => {
	const analyzeParams = {
		url: req.body.url,
		features: {
			concepts: {
				limit: 1,
			},
		},
	};

	naturalLanguageUnderstanding
		.analyze(analyzeParams)
		.then((analysisResults) => {
			res.send(
				JSON.stringify(analysisResults.result.concepts[0].text, null, 2)
			);
		})
		.catch((err) => {
			res.send(err);
		});
});

module.exports = router;
