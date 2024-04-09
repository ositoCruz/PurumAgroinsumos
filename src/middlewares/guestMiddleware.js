// Middleware para usuarios invitados
async function guestMiddleware(req, res, next) {
    try {
        const userLogged = req.session.user;
        if (userLogged) {
            return res.redirect('/user/profile');
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = guestMiddleware;