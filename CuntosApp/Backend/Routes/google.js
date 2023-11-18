const router = require('express').Router()

router.get('/', passport.authenticate('google'));

app.get('/oauth2/redirect/google',
  passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/');
  })

module.exports = router
