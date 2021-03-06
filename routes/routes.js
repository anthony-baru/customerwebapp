var express = require("express");
var router = express.Router();
var authController = require("../controllers/AuthController");
var helloController = require("../controllers/helloController");
var authMiddleware = require("../middleware/AuthMiddleware");
router.get("/hello", authMiddleware.Validate, helloController.simple_hello);
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/auth/validate", authController.validate_token);
router.post("/auth/confirm-registration", authController.confirmRegistration);

module.exports = router;
