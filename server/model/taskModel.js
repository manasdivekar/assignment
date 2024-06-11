const mongoose = require("mongoose");

// creating a Schema for Book

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("Todo", TodoSchema);
