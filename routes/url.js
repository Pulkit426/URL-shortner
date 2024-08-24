const express = require('express');
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require('../controllers/url');
const { checkAuthentication } = require('../middlewares/auth');

const router = express.Router();

router.post('/', checkAuthentication, handleGenerateNewShortURL);

router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;
