const express = require("express");
const router = express.Router();
const {
  getPayment,
  checkPayment,
  notification,
  redirection,
} = require("../controllers/paymentController");

router.get("/notification", notification);
router.post("/redirection", redirection);

module.exports = router;
