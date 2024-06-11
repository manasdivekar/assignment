const express = require("express");
const Todo = require("../model/taskModel");

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single todo task by id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new todo
router.post("/", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body;
  let updateTask;
  try {
    updateTask = await Todo.findByIdAndUpdate(id, {
      title,
      description,
      completed,
    });
    await updateTask.save().then(() => res.status(200).json({ updateTask }));
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Failed to update the task" });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  let deleteTask;
  const id = req.params.id;

  try {
    deleteTask = await Todo.findByIdAndDelete(id);

    res.status(201).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    console.log("error", error);
  }
});

router.patch("/:id/complete", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    todo.completed = completed;
    await todo.save();

    res.json({ message: "Todo status updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
