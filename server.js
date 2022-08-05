require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log("Banco de dados conectado.");
        app.emit("pronto");
    }).catch((err) => console.error(err));

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal, middlewareSegundo } = require("./src/middlewares/middleware");

// Habilitar 'req.body' contendo form post
app.use(express.urlencoded({ extended: true }));
// Pasta para conteudo estatico
app.use(express.static(path.resolve(__dirname, "public")))
// Configurar view engine
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
// Middleware global
app.use(middlewareGlobal);
// Usar este modulo para gerenciar as rotas
app.use(routes);


console.log("Aguardando conexão com o banco de dados...")
// Iniciar o servidor quando o BD estiver conectado.
app.on("pronto", () => {
    app.listen(3000, () => {
        console.log("Servidor iniciado na porta 3000");
    });
});
