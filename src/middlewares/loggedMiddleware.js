// Middleware que no permite entrar a ciertas vistas si no se está loggeado
const loggedMiddleware = {
    noLogged: async function (req, res, next) {
        try {
            const userLogged = req.session.user;
            if (!userLogged) {
                return res.redirect('/user/login');
            }
            next();
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
};

module.exports = loggedMiddleware;