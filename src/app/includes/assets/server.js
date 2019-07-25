const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./login');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use('/auth',auth)
app.get('/', (req, res) => {
    res.json("Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});