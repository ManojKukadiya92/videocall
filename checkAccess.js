const config = require("./config");

module.exports = () => {
  return (req, res, next) => {
    const token = req.body.key || req.query.key || req.headers.key;
    if (token) {
      console.log('ok');
      if (token == config.secret_key) return next();
      else
      console.log('eease');
        return res
          .status(401)
          .send({ status: false, error: "Unauthorized access" });
    } else
      return res
        .status(401)
        .send({ status: false, error: "Unauthorized access" });
  };
};
