const express = require('express');
const execSync = require('child_process').execSync;

const app = express();
const beatsJSON = execSync('cd ./beat-extraction && python -W ignore extractor.py song.wav').toString();
app.use('/', express.static(__dirname + '/frontend-files'));
app.get('/datafile', (req, res) => {
  res.end(beatsJSON);
});
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address.port}`);
});
