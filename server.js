'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World. DevOps-Docker Example');
});

app.get('/version', (req, res) => {
    res.send('The version is 1.0.0.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
