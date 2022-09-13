const express = require("express");
const router = express.Router();
const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
const { api_key, service_url } = require("../../config");

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
	version: "2022-04-07",
	authenticator: new IamAuthenticator({
		apikey: api_key,
	}),
	serviceUrl: service_url,
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
			return res.send(err);
		});
});

module.exports = router;
