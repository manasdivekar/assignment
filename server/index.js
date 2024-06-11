const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
 require("./connection/db");
dotenv.config();
const app = express();
const taskRoute = require("./routes/taskRoutes");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use(cors());

app.use(express.json());
app.use("/api/task", taskRoute);

app.listen(port, () => {
    console.log(`Server Started Successfully on: ${port}`); // Corrected this line
  });
