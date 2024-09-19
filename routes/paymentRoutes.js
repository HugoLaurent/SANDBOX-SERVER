const express = require("express");
const router = express.Router();
const {
  getPayment,
  checkPayment,
} = require("../controllers/paymentController");

router.get("/", getPayment);
router.get("/check-payment", checkPayment);

module.exports = router;
