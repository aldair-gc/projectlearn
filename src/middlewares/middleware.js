exports.middlewareGlobal = (req, res, next) => {
    console.log("\nmiddlewareGlobal\n");
    next();
};

exports.middlewareSegundo = (req, res, next) => {
    console.log("\nmiddlewareSegundo\n");
    next();
};