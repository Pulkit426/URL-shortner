const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body?.url) return res.status(400).json({ error: 'URL required' });

  const shortId = shortid();

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render('home', { id: shortId });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;

  const resEntry = await URL.findOne({ shortId });

  return res.json({
    totalClicks: resEntry.visitHistory.length,
    visitHistory: resEntry.visitHistory,
  });
}
module.exports = { handleGenerateNewShortURL, handleGetAnalytics };
