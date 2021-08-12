'use strict';

const express = require('express');
const fs = require('fs');

// Settings
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  fs.readFile('/app/proxy.pac', function (err, data) {
    if (err) throw err;
    res.send(data.toString());
  });
});

app.listen(PORT, HOST);
