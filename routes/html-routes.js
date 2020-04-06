// Sends various html pages to users

// Middleware

const authenticated = require("../config/middleware/authenicated");

// Routes

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/login-wrong", function(req, res) {
    res.render("login-wrong");
  });

  app.get("/signup-exists", function(req, res) {
    res.render("signup-exists");
  });

  app.get("/profile-signup", authenticated, function(req, res) {
    res.render("profile-signup");
  });
};