function isLoggedIn(req, res, next) {
  /*   if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    } */
    next()
}

module.exports = isLoggedIn;