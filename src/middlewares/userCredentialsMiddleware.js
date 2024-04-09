// Middleware que verifica las credenciales del usuario
const db = require('../database/models');
async function userCredentialsMiddleware(req, res, next) {
    try {
        const userLogged = req.session.user;
        if (userLogged) {
            const user = await db.Users.findByPk(userLogged.user_id);
            if (user) {
                res.locals.loggedIn = true;
                res.locals.userLogged = userLogged;
                if (user.rol_id === 2) { 
                    res.locals.isAdmin = true;
                }
            }
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}
module.exports = userCredentialsMiddleware;