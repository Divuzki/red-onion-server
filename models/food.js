const mongoose = require("mongoose");

const FoodModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title value"],
    },
    description: String,
    price: {
      type: Number,
      required: [true, "Please add a price value"],
    },
    image: {
      type: String,
      required: [true, "Please add an image"],
    },
    foodType: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", FoodModel);

module.exports = Food;
