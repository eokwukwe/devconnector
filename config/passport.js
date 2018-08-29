// Authenntication for portected routes

const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  mongoose = require('mongoose'),
  User = mongoose.model('users'), // same as User = require(../models/User)
  jwtSecret = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtSecret.jwt_secret;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // jwt_payload includes the user data used to generate
      // the token during authentication.
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }

          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
