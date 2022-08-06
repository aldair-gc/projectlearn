exports.paginaInicial = (req, res) => {
    res.render("index", {
        titulo: "Titulo Home",
        numeros: [1, 2, 3, 4, 5]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};