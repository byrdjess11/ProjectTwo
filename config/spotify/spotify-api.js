var express = require("express");

var app = express();

accountLogin = function() {
  app.get("/login", function(req, res) {
    var scopes = "user-read-private user-read-email";
    res.redirect(
      "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" +
        // eslint-disable-next-line camelcase
        my_client_id +
        (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
        "&redirect_uri=" +
        encodeURIComponent(redirect_uri)
    );
  });
};

accountLogin();
