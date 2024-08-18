const mongoose = require('mongoose');

async function connectToMongoDB() {
  return mongoose.connect(process.env.MONGO_CONNECT_URL);
}

module.exports = { connectToMongoDB };
