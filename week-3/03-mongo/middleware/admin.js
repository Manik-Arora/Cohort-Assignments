const { Admin } = require("../db/index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let { username, password } = req.headers;
  Admin.findOne({
    username: username,
    password: password,
  }).then((result) => {
    if (result) next();
    else
      res.status(403).json({
        msg: "User doesn't exist",
      });
  });
}

module.exports = adminMiddleware;
