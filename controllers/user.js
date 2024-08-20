const User = require('../models/user');

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  await User.create({ name, email, password });
  return res.render('home', {
    sSignUpSuccessMessage: 'Succesfully Created Account',
  });
}
async function handleUserSignIn() {}

module.exports = { handleUserSignUp, handleUserSignIn };
