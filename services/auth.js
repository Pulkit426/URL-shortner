const jwt = require('jsonwebtoken');
const SECRETKEY = process.env.SECRETKEY;

function createToken(user) {
  return jwt.sign({ _id: user._id, email: user.email }, SECRETKEY);
}

function verifyToken(token) {
  if (!token) return null;

  try {
    return jwt.verify(token, SECRETKEY);
  } catch (error) {
    return null;
  }
}

module.exports = { createToken, verifyToken };
