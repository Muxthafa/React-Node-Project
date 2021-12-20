const express = require("express");
const path = require('path');
const cors = require("cors");
const app = express();

app.use(
    cors({
      origin: "https://demo-react-node-app-dummy.herokuapp.com/",
    })
  );

app.use(express.static(path.resolve(__dirname, './frontend/build')));

const PORT = process.env.PORT || 3001;


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});