const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static('dist/SMP-Kepler-UI'));


app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, "/dist/SMP-Kepler-UI/index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})