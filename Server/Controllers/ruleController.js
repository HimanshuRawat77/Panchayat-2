import Rule from "../models/Rule.js";

// get rules
export const getRules = async (req, res) => {
  try {
    const rules = await Rule.find().sort({ createdAt: -1 });
    res.json(rules);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch rules", error: error.message });
  }
};

// add rule
export const addRule = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title?.trim() || !description?.trim()) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const rule = await Rule.create({
      title: title.trim(),
      description: description.trim(),
      category: category?.trim() || "General",
    });

    res.status(201).json(rule);
  } catch (error) {
    res.status(500).json({ message: "Failed to add rule", error: error.message });
  }
};

export const updateRule = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const update = {};
    if (title !== undefined) update.title = String(title).trim();
    if (description !== undefined) update.description = String(description).trim();
    if (category !== undefined) update.category = String(category).trim() || "General";

    if (Object.keys(update).length === 0) {
      return res.status(400).json({ message: "No fields to update" });
    }

    const rule = await Rule.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!rule) {
      return res.status(404).json({ message: "Rule not found" });
    }
    res.json(rule);
  } catch (error) {
    res.status(500).json({ message: "Failed to update rule", error: error.message });
  }
};

export const deleteRule = async (req, res) => {
  try {
    const rule = await Rule.findByIdAndDelete(req.params.id);
    if (!rule) {
      return res.status(404).json({ message: "Rule not found" });
    }
    res.json({ message: "Rule deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete rule", error: error.message });
  }
};