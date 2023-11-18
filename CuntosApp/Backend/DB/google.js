const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// require('dotenv').config()

// const id = process.env.GOOGLE_CLIENT_ID;
// const sec = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: '482194457884-dnb1613m6sfnqmto8mcd81dc1avne379.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}  
));

// Serialización del usuario para almacenar en la sesión
passport.serializeUser(function(user, done) {
  done(null, user);
});

// Deserialización del usuario para recuperar de la sesión
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = {

};
