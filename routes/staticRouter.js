const express = require('express');
const URL = require('../models/url');
const { checkAuthentication } = require('../middlewares/auth');
const router = express.Router();

router.get('/', checkAuthentication, async (req, res) => {
  const allUrls = await URL.find({ createdBy: req.user._id });

  return res.render('home', { urls: allUrls });
});

router.get('/signup', (req, res) => {
  return res.render('signup');
});

router.get('/login', (req, res) => {
  return res.render('login');
});

router.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;

  const resEntry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  res.redirect(resEntry?.redirectURL);
});

module.exports = router;
