const express = require("express"),
  helmet = require("helmet"),
  mongoose = require("mongoose"),
  morgan = require("morgan"),
  dotenv = require("dotenv");

dotenv.config();

// init the express app
const app = express();

// connecting mongo db with mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`MongoDB connected`);
  }
);

// adding middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



// start the express app on port 8800
app.listen(8800, () => {
  console.log(`Backend server is running.`);
});
