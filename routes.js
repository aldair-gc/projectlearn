const express = require("express");
const route = express.Router();
const homeControler = require("./src/controllers/home");
const contatoController = require("./src/controllers/contato");


// Home routes
route.get("/", homeControler.paginaInicial);
route.post("/", homeControler.trataPost);

// Contact routes
route.get("/contato", contatoController.paginaInicial);
route.post("/contato", contatoController.tratarPost);




module.exports = route;