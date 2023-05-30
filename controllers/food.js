const Food = require("../models/food.js");
const asyncHandler = require("express-async-handler");

/**
@desc GET Foods
@route GET /foods
@access Private
*/
const getFoods = asyncHandler(async (req, res) => {
  const foods = await Food.find();

  res.json({ foods });
});

/**
@desc Create Foods
@route POST /foods
@access Private
*/
const createFood = asyncHandler(async (req, res) => {
  let { title, description, price, image, foodType } = req.body;

  const checkFood = await Food.findOne({ title, description, price, image, foodType });
  if (checkFood) {
    res.status(400);
    throw new Error("Food already exists");
  }

  let newFood = await Food.create({ title, description, price, image, foodType });

  if(newFood && newFood._id){
    newFood = await Food.findById(newFood._id)
  }

  res.status(201).json({ newFood, acknowledged: true });
});

/**
@desc GET Food
@route GET /foods/:id
@access Private
*/
const getFood = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const foundFood = await Food.findById(id);
  res.status(200).json(foundFood);
});

/**
@desc Update Food
@route PUT /foods/:id
@access Private
*/
const updateFood = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await Food.findById(id);
  if (!data) {
    res.status(404);
    throw new Error("Food not found");
  }

  const updatedFile = await Food.findOneAndUpdate(
    data.name,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({updatedFile});
});

/**
@desc Delete Food
@route DELETE /foods/:id
@access Private
*/
const deleteFood = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await Food.findById(id);

  if (!data) {
    res.status(404);
    throw new Error("Food not found");
  }
  await Food.findByIdAndRemove(id)
  res.status(200).json({ id: id, acknowledged: true, message: "Food Deleted Successfully" });
});

module.exports = { getFoods, createFood, getFood, updateFood, deleteFood };