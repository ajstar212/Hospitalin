const express = require("express");
const router = express.Router();

// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

router.get("/search", (req, res) => res.render("search"));

router.get("/route", (req, res) => res.render("route"));

router.get("/pay", (req, res) => res.render("pay"));

router.get("/thanks", (req, res) => res.render("thank"));

module.exports = router;
