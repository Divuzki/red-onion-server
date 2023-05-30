const express = require("express");
const {
  getFoods,
  createFood,
  getFood,
  deleteFood,
  updateFood,
} = require("../controllers/food.js");
const authorize = require("../middleware/authorize.js");
const router = express.Router();

// all routes in here are starting with /category
router.get("/", getFoods).post("/", authorize, createFood);
router
  .get("/:id", getFood)
  .delete("/:id", authorize, deleteFood)
  .put("/:id", authorize, updateFood);
  
module.exports = router;
