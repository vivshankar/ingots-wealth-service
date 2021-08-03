// import dependencies and initialize the express router
const express = require('express');
const OAuthController = require('../controllers/oauth-controller');
const config = require('../config').Config;

const oauthController = new OAuthController();
const router = express.Router();

router.get('/login', oauthController.authorize);
router.get('/logout', oauthController.logout)
router.get('/auth/callback', oauthController.aznCallback);

module.exports = router;