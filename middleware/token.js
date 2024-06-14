const jwt = require("jsonwebtoken");
const tokenV = (req, res, next) => {
   
  if (req.method === "GET") {
    next();
  } else {
    const token = req.headers.auth;

    try {
      if (token) {
        const decoded = jwt.verify(token, "deepak");
        console.log(decoded)
        if (decoded) {
            req.body.userID=decoded.user_id
          next();
        } else {
          res.send("login first");
        }
      } else {
        res.send("login first not");
      }
    } catch (err) {
      res.send(err);
    }
  }
};

module.exports = { tokenV };
