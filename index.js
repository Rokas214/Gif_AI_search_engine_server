const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const { port } = require("./src/config");
const auth = require("./src/routes/v1/auth");
const home = require("./src/routes/v1/home");

app.use("/auth", auth);
app.use("/", home);

app.listen(port, () => console.log("it's working"));
