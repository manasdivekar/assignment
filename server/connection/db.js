const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoDB = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));
