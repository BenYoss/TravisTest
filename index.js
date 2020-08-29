const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('ci with travis!'); 
});

const server = app.listen(3000, () => {
    console.log('App is successfully running on 3000?');
});

module.exports = {
    server,
}