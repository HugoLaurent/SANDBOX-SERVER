const express = require("express");
const router = express.Router();
const {
  getPayment,
  checkPayment,
  notification,
  confirmation,
} = require("../controllers/paymentController");

router.post("/notification", notification);
router.post("/confirmation", confirmation);

module.exports = router;
