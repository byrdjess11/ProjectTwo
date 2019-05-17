/* eslint-disable camelcase */
var authController = require("../controllers/authController");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.get("/login", authController.login);

  app.get("/auth/dashboard", authController.linkedDash);

  app.get("/auth/playlists", authController.linkedLists);

  app.get("/auth/friends", authController.linkedFriends);

  app.get("/auth/matches", authController.linkedMatches);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );

  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};
