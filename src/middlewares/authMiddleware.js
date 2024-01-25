const guestMiddleware = (req, res, next) => {
    if (req.session.user) {
        return res.redirect(`/profile/${req.session.username}`);
    }
    next();
};
const authMiddleware = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
};

module.exports = {
    guestMiddleware,
    authMiddleware
};