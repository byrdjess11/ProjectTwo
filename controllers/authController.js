var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.login = function(req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?client_id=5104ecefda2f414b9f0c237eac499717" +
      "&redirect_uri=http://localhost:3000/callback" +
      "callback&scope=user-read-private%20user-read-email&response_type=token&state=123"
  );
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/signin");
  });
};
