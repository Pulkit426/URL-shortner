const User = require('../models/user');
const { verifyToken } = require('../services/auth');

async function checkAuthentication(req, res, next) {
  const uuid = req.cookies?.uuid;

  if (!uuid) return res.redirect('/login');

  const resValue = verifyToken(uuid);

  if (resValue) {
    const user = await User.findOne({ email: resValue.email });
    req.user = user;
    next();
  } else return res.redirect('/login');
}

module.exports = { checkAuthentication };
