import { Router } from "express";
import { Experience } from "../models/Experience.js";
import { authenticateToken } from "../middleware/auth.js";
import { isDbConnected, memoryStore } from "../config/db.js";

const router = Router();

// GET all experiences
router.get("/", async (req, res) => {
  try {
    if (isDbConnected) {
      const experiences = await Experience.find().sort({ createdAt: -1 });
      return res.json(experiences);
    } else {
      return res.json(memoryStore.experiences);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST new experience
router.post("/", authenticateToken, async (req, res) => {
  const { role, company, duration, type, technologies, achievements } =
    req.body;
  if (!role || !company || !duration || !type) {
    return res
      .status(400)
      .json({ error: "Role, company, duration, and type are required." });
  }

  try {
    if (isDbConnected) {
      const newExp = await Experience.create({
        role,
        company,
        duration,
        type,
        technologies,
        achievements,
      });
      return res.status(201).json(newExp);
    } else {
      const newExp = {
        _id: `mem-exp-${Date.now()}`,
        role,
        company,
        duration,
        type,
        technologies: technologies || [],
        achievements: achievements || [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      memoryStore.experiences.push(newExp);
      return res.status(201).json(newExp);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// PUT update experience
router.put("/:id", authenticateToken, async (req, res) => {
  const fields = req.body;
  try {
    if (isDbConnected) {
      const updatedExp = await Experience.findByIdAndUpdate(
        req.params.id,
        fields,
        { new: true },
      );
      if (!updatedExp)
        return res.status(404).json({ error: "Experience not found." });
      return res.json(updatedExp);
    } else {
      const expIdx = memoryStore.experiences.findIndex(
        (e) => e._id === req.params.id,
      );
      if (expIdx === -1)
        return res.status(404).json({ error: "Experience not found." });

      memoryStore.experiences[expIdx] = {
        ...memoryStore.experiences[expIdx],
        ...fields,
        updatedAt: new Date(),
      };
      return res.json(memoryStore.experiences[expIdx]);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// DELETE experience
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    if (isDbConnected) {
      const deletedExp = await Experience.findByIdAndDelete(req.params.id);
      if (!deletedExp)
        return res.status(404).json({ error: "Experience not found." });
      return res.json({ message: "Experience deleted successfully." });
    } else {
      const expIdx = memoryStore.experiences.findIndex(
        (e) => e._id === req.params.id,
      );
      if (expIdx === -1)
        return res.status(404).json({ error: "Experience not found." });
      memoryStore.experiences.splice(expIdx, 1);
      return res.json({ message: "Experience deleted successfully." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
