const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');

const app = express();
const PORT = process.env.PORT;

connectToMongoDB();

app.use(express.json());
app.use('/url', urlRoute);
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
