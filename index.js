const express = require('express');
const path = require('path');
const { connectToMongoDB } = require('./connect');
const staticRoute = require('./routes/staticRouter');
const urlRoute = require('./routes/url');

const app = express();
const PORT = process.env.PORT;

connectToMongoDB();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/url', urlRoute);
app.use('/', staticRoute);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
