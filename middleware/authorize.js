// Authorization Middleware
const authorize = (req, res, next) => {
  const { pwd } = req.body;

  // Check if the password is correct
  if (pwd !== process.env.AUTH_PWD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // If the password is correct, proceed to the next middleware or route handler
  next();
};

module.exports = authorize;