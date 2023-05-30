const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productsRoute = require('./routes/productsRoute');
const errorHandler = require("./middleware/errorMiddleware.js");
require("colors");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/foods", productsRoute)
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () =>
  console.log(
    `Server running on port: ${`http://localhost:${PORT}`.bgBlue}`.white
  )
);