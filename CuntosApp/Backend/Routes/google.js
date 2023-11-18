const router = require('express').Router()

router.get('/', passport.authenticate('google'));

module.exports = router
