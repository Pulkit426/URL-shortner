const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { checkAuthentication } = require('./middlewares/auth');
const { connectToMongoDB } = require('./connect');

const staticRoute = require('./routes/staticRouter');
const urlRoute = require('./routes/url');
const userRoute = require('./routes/user');

const app = express();
const PORT = process.env.PORT;

connectToMongoDB();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/url', checkAuthentication, urlRoute);
app.use('/user', userRoute);
app.use('/', staticRoute);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
