const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Word!"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Example app on port 3000!"));
