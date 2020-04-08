// Sends various html pages to users

// Middleware

const authenticated = require("../config/middleware/authenicated");

const profile = require("../config/middleware/profile-auth");

// Models

const db = require("../models");

// Routes

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("maps");
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

    app.get("/homepage", profile, function(req, res) {
        res.render("homepage");
    });

    app.get("/search", profile, function(req, res) {
        res.render("search");
    });
};