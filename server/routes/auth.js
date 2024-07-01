const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");

router.route("/getauth").get(auth.getUserData);

module.exports = router;
