const User = require('../models/user');

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  await User.create({ name, email, password });
  return res.render('home', {
    SignUpSuccessMessage: 'Succesfully Created Account',
  });
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) return res.render('login', { error: 'Invalid credentials' });

  return res.render('home', {
    SignUpSuccessMessage: 'Succesfully Logged In',
  });
}

module.exports = { handleUserSignUp, handleUserLogin };
