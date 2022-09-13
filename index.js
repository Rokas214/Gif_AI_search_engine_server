const express = require("express");
const cors = require("cors");
const app = express();
const { port } = require("./src/config");

app.use(express.json());
app.use(cors());

const auth = require("./src/routes/v1/auth");
const home = require("./src/routes/v1/home");
const gifHistory = require("./src/routes/v1/gifHistory");
const watsonUrlReader = require("./src/routes/v1/watsonUrlReader");
const watsonTextReader = require("./src/routes/v1/watsonTextReader");

app.use("/auth", auth);
app.use("/", home);
app.use("/gifhistory", gifHistory);
app.use("/watson-url", watsonUrlReader);
app.use("/watson-text", watsonTextReader);

app.listen(port, () => console.log(`Server working on port ${port}`));
