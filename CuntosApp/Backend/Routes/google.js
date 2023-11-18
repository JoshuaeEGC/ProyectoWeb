const router = require('express').Router()

router.get('/login/google', passport.authenticate('google'));

module.exports = router
