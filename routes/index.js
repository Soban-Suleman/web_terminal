const express = require("express");
const router = express.Router();

const authentication = require("../app/middlewares/userAuthentication");
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/admin", authentication.checkAuthenticated, (req, res) => {
  res.render("admin");
});

router.get("/login", authentication.checkNotAuthenticated, (req, res) => {
  res.render("login");
});
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});
router.get("/register", authentication.checkNotAuthenticated, (req, res) => {
  res.render("register");
});

module.exports = router;
