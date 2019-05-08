var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    user.findOne({ where: { id: id } }).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, username, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        User.findOne({
          where: {
            username: username
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That username is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              username: req.body.username,

              password: userPassword
            };

            User.create(data).then(function(newUser) {
              if (!newUser) {
                return done(null, false);
              }
              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );
};
