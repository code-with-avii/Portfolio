import { Router } from "express";
import { Skill } from "../models/Skill.js";
import { authenticateToken } from "../middleware/auth.js";
import { isDbConnected, memoryStore } from "../config/db.js";

const router = Router();

// GET all skills
router.get("/", async (req, res) => {
  try {
    if (isDbConnected) {
      const skills = await Skill.find().sort({ currentlyLearning: 1, name: 1 });
      return res.json(skills);
    } else {
      return res.json(memoryStore.skills);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST new skill
router.post("/", authenticateToken, async (req, res) => {
  const { name, category, icon, currentlyLearning } = req.body;
  if (!name || !category || !icon) {
    return res
      .status(400)
      .json({ error: "Name, category, and icon are required." });
  }

  try {
    if (isDbConnected) {
      const newSkill = await Skill.create({
        name,
        category,
        icon,
        currentlyLearning,
      });
      return res.status(201).json(newSkill);
    } else {
      const newSkill = {
        _id: `mem-skill-${Date.now()}`,
        name,
        category,
        icon,
        currentlyLearning: !!currentlyLearning,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      memoryStore.skills.push(newSkill);
      return res.status(201).json(newSkill);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// PUT update skill
router.put("/:id", authenticateToken, async (req, res) => {
  const { name, category, icon, currentlyLearning } = req.body;
  try {
    if (isDbConnected) {
      const updatedSkill = await Skill.findByIdAndUpdate(
        req.params.id,
        { name, category, icon, currentlyLearning },
        { new: true },
      );
      if (!updatedSkill)
        return res.status(404).json({ error: "Skill not found." });
      return res.json(updatedSkill);
    } else {
      const skillIdx = memoryStore.skills.findIndex(
        (s) => s._id === req.params.id,
      );
      if (skillIdx === -1)
        return res.status(404).json({ error: "Skill not found." });

      memoryStore.skills[skillIdx] = {
        ...memoryStore.skills[skillIdx],
        name: name !== undefined ? name : memoryStore.skills[skillIdx].name,
        category:
          category !== undefined
            ? category
            : memoryStore.skills[skillIdx].category,
        icon: icon !== undefined ? icon : memoryStore.skills[skillIdx].icon,
        currentlyLearning:
          currentlyLearning !== undefined
            ? !!currentlyLearning
            : memoryStore.skills[skillIdx].currentlyLearning,
        updatedAt: new Date(),
      };
      return res.json(memoryStore.skills[skillIdx]);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// DELETE skill
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    if (isDbConnected) {
      const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
      if (!deletedSkill)
        return res.status(404).json({ error: "Skill not found." });
      return res.json({ message: "Skill deleted successfully." });
    } else {
      const skillIdx = memoryStore.skills.findIndex(
        (s) => s._id === req.params.id,
      );
      if (skillIdx === -1)
        return res.status(404).json({ error: "Skill not found." });
      memoryStore.skills.splice(skillIdx, 1);
      return res.json({ message: "Skill deleted successfully." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
