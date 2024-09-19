const express = require("express");
const router = express.Router();

const {
  getRecette,
  createRecette,
  getOneRecette,
  updateRecette,
} = require("../controllers/recetteController");

router.get("/", getRecette);
router.get("/:id", getOneRecette);
router.post("/create-recette", createRecette);
router.put("/:id", updateRecette);

module.exports = router;
