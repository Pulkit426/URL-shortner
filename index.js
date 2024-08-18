const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();
const PORT = process.env.PORT;

connectToMongoDB();

app.use(express.json());
app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;

  const resEntry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  res.redirect(resEntry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
