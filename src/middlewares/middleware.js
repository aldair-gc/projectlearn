exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = "Valor da variavel local";
    next();
};

exports.middlewareSegundo = (req, res, next) => {
    console.log("\nmiddlewareSegundo\n");
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === "EBADCSRFTOKEN") {
        return res.render("404");
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};