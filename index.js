const express = require('express');

const urlRoute = require('./routes/url');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/url', urlRoute);
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
