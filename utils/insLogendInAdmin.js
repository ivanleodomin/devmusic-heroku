function isLoggedIn(req, res, next) {
    /* if (req.isAuthenticated() && req.user.isAdmin) {
        next();
    } else {
        res.redirect("/login");
    } */
    next()
}
module.exports =isLoggedIn
