const express = require('express')
const app = express()
const port = 9000

app.get('/get', function (req, res) {
    res.send('Contestando una petición por GET')
});

app.post('/post', function (req, res) {
    res.send('Contestando una petición por POST')
});

app.put('/put', function (req, res) {
    res.send('Contestando una petición por PUT')
});

app.delete('/delete', function (req, res) {
    res.send('Contestando una petición por DELETE')
});

app.listen(port, function () { 
    console.log(`Example app listening on port ${port}!`)
})