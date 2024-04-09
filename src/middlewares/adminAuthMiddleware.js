const db = require('../database/models');

// Middleware que no permite ver vistas si no se es admin
const adminAuthMiddleware = {
    noLoggedAdmin: async function (req, res, next) {
        try {
            const userLogged = req.session.user;
            console.log(userLogged)
            if (!userLogged) {
                return res.status(403).send('<script>alert("¡Su cuenta no tiene privilegios de administrador!"); window.history.back();</script>');
                return res.redirect('/');
            }
            const user = await db.Users.findByPk(userLogged.user_id);
            if (!user || user.rol_id !== 2) { 
                
                return res.redirect('/');
            }
            next();
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
};

module.exports = adminAuthMiddleware;