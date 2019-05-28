const express = require('express');

const app = express();
app.use('/', express.static(__dirname + '/frontend-files'));
app.get('/datafile', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write();
    res.end();
});
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${server.address.port}`);
});
