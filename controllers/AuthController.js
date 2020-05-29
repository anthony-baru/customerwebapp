var authService = require("../services/AuthService");
exports.register = function (req, res) {
  let register = authService.Register(req.body, function (err, result) {
    if (err) {
      return res.send(err);
    }
    res.send(result);
  });
};

exports.login = function (req, res) {
  let login = authService.Login(req.body, function (err, result) {
    if (err) res.send(err);
    res.send(result);
  });
};

exports.validate_token = function (req, res) {
  let validate = authService.Validate(req.body.token, function (err, result) {
    if (err) res.send(err.message);
    res.send(result);
  });
};

exports.sendConfirmationCode = (req, res) => {
  let validate = authService.sendConfirmationCode(req.body.token, function (
    err,
    result
  ) {
    if (err) res.send(err.message);
    res.send(result);
  });
};

exports.confirmRegistration = (req, res) => {
  authService.confirmReg(req.body.email, req.body.code, function (err, result) {
    if (err) res.send(err.message);
    return res.send(result);
  });
};
