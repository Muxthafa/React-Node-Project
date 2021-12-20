const express = require("express");
const path = require('path');
const cors = require("cors");
const app = express();

app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

app.use(express.static(path.resolve(__dirname, './frontend/build')));

const PORT = process.env.PORT || 3001;


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});