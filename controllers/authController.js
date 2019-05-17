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
      "&scope=user-read-private%20user-read-email" +
      "&redirect_uri=http:localhost:3000/auth/dashboard" +
      "&nosignup=true&nolinks=true&show_dialog=true&response_type=token"
  );
};

exports.linkedDash = function(req, res) {
  res.render("linkeddash");
};

exports.linkedLists = function(req, res) {
  res.render("linkedlists");
};

exports.linkedFriends = function(req, res) {
  res.render("linkedfriends");
};

exports.linkedMatches = function(req, res) {
  res.render("linkedmatches");
};

exports.logout = function(req, res) {
  // eslint-disable-next-line no-unused-vars
  req.session.destroy(function(err) {
    res.redirect("/signin");
  });
};
