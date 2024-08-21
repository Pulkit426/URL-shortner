const User = require('../models/user');
const { createToken } = require('../services/auth');

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  await User.create({ name, email, password });
  return res.redirect('/');
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) return res.render('login', { error: 'Invalid credentials' });

  const token = createToken(user);
  res.cookie('uuid', token);
  return res.redirect('/');
}

module.exports = { handleUserSignUp, handleUserLogin };
