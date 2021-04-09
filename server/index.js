const express = require("express");
const app = express();
PORT = 8000;

const bcrypt = require("bcrypt");

app.listen(PORT, () => {
  console.log(`Now listening on http://localhost:${PORT}`);
});
