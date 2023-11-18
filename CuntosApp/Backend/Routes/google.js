const router = require('express').Router()
app.get('/login/google', passport.authenticate('google'));

module.exports = router
