const express = require('express');
const path = require('path')

const port = 4000

const app = express();

app.use("", express.static(path.join(__dirname, 'dist', 'index.html')))

app.get('*', function(req, res) {
    const uri = path.join(__dirname, 'dist', 'index.html');
    res.sendfile(uri);
})

app.listen(port, () => {
    console.log('app is running');
})
