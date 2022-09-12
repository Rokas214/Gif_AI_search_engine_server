const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const { port } = require("./src/config");
const auth = require("./src/routes/v1/auth");
const home = require("./src/routes/v1/home");
const gifHistory = require("./src/routes/v1/gifHistory");
const watson = require("./src/routes/v1/watson");

app.use("/auth", auth);
app.use("/", home);
app.use("/gifhistory", gifHistory);
app.use("/watson", watson);

app.listen(port, () => console.log("it's working"));
