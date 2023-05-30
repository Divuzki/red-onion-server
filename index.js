const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const foodsRoute = require('./routes/foodsRoute.js');
const errorHandler = require("./middleware/errorMiddleware.js");
const connectDB = require('./config/db.js');
require("colors");
dotenv.config();

const PORT = process.env.PORT || 5000;
const ADDRESS = process.env.ADDRESS || "http://localhost";
connectDB()

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/foods", foodsRoute)
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('"This API was created by Divine Ikhuoria aka divuzki https://www.github.com/divuzki @ https://github.com/Divuzki/red-onion-server"');
});

app.listen(PORT, () =>
  console.log(
    `Server running on port: ${`${ADDRESS}:${PORT}`.bgBlue}`.white
  )
);