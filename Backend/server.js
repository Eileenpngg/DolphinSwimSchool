const express = require("express");
const app = express();
const cors = require("cors");
const swimApp = require("./routers/router");

//middleware
app.use(cors());
app.use(express.json());

app.use("/api", swimApp);

// ====================================================================================================================================================================================================================

app.listen(5001, () => {
  console.log("swim app is running!!");
});
