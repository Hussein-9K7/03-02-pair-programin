// middleware/auth.js

module.exports = (req, res, next) => {
    if (req.query.admin === 'true') {
      return next();
    }
    res.status(403).json({ message: "Admin rights required!!!" });
  };
  