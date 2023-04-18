const { json } = require('body-parser');

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static('public'))

app.post("/persona/guardar",function(req,res){
    console.log(req);
    //res.send("Persona Guardada" + JSON.stringify(req.body));

    res.send("<html><body><h1>Formulario Enviado</h1><span>Nombre: <b>" + req.body.name +"</b>, Apellido: <b>"+ req.body.Lname  +"</b>, Correo: <b>"+ req.body.mail +"</b>, Teléfono: <b>"+ req.body.Teléfono +"</b>, Fecha: <b>"+ req.body.fecha +"</b>, Comentario: <b>" + req.body.txt + "</b></span></body></html>");

});

app.listen (8080);

