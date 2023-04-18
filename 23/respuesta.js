
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const express = require('express');

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static('public'))

app.post("/persona/guardar", function (req, res) {
    console.log(req);
    //res.send("Persona Guardada" + JSON.stringify(req.body));
    res.send("<html><body><h1>Persona guardada</h1><span>Nombre: <b>" + req.body.lname + " " + req.body.fname + "</b></span></body></html>");

});
