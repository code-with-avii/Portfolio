import { Router } from "express";
import { Project } from "../models/Project.js";
import { authenticateToken } from "../middleware/auth.js";
import { isDbConnected, memoryStore } from "../config/db.js";

const router = Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    if (isDbConnected) {
      const projects = await Project.find().sort({
        featured: -1,
        createdAt: -1,
      });
      return res.json(projects);
    } else {
      return res.json(memoryStore.projects);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// GET single project by ID
router.get("/:id", async (req, res) => {
  try {
    if (isDbConnected) {
      const project = await Project.findById(req.params.id);
      if (!project)
        return res.status(404).json({ error: "Project not found." });
      return res.json(project);
    } else {
      const project = memoryStore.projects.find((p) => p._id === req.params.id);
      if (!project)
        return res.status(404).json({ error: "Project not found." });
      return res.json(project);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// POST new project
router.post("/", authenticateToken, async (req, res) => {
  const {
    title,
    subtitle,
    description,
    longDescription,
    image,
    tags,
    features,
    architectureDiagram,
    apiFlow,
    databaseDesign,
    challengesSolved,
    performanceOptimizations,
    futureImprovements,
    githubUrl,
    liveUrl,
    featured,
    role,
    duration,
  } = req.body;

  if (!title || !subtitle || !description || !image) {
    return res
      .status(400)
      .json({ error: "Title, subtitle, description, and image are required." });
  }

  try {
    if (isDbConnected) {
      const newProject = await Project.create({
        title,
        subtitle,
        description,
        longDescription,
        image,
        tags,
        features,
        architectureDiagram,
        apiFlow,
        databaseDesign,
        challengesSolved,
        performanceOptimizations,
        futureImprovements,
        githubUrl,
        liveUrl,
        featured,
        role,
        duration,
      });
      return res.status(201).json(newProject);
    } else {
      const newProject = {
        _id: `mem-project-${Date.now()}`,
        title,
        subtitle,
        description,
        longDescription: longDescription || "",
        image,
        tags: tags || [],
        features: features || [],
        architectureDiagram: architectureDiagram || "",
        apiFlow: apiFlow || [],
        databaseDesign: databaseDesign || "",
        challengesSolved: challengesSolved || "",
        performanceOptimizations: performanceOptimizations || "",
        futureImprovements: futureImprovements || [],
        githubUrl: githubUrl || "",
        liveUrl: liveUrl || "",
        featured: !!featured,
        role: role || "Lead Developer",
        duration: duration || "2026",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      memoryStore.projects.push(newProject);
      return res.status(201).json(newProject);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// PUT update project
router.put("/:id", authenticateToken, async (req, res) => {
  const fieldsToUpdate = req.body;
  try {
    if (isDbConnected) {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        fieldsToUpdate,
        { new: true },
      );
      if (!updatedProject)
        return res.status(404).json({ error: "Project not found." });
      return res.json(updatedProject);
    } else {
      const projectIdx = memoryStore.projects.findIndex(
        (p) => p._id === req.params.id,
      );
      if (projectIdx === -1)
        return res.status(404).json({ error: "Project not found." });

      memoryStore.projects[projectIdx] = {
        ...memoryStore.projects[projectIdx],
        ...fieldsToUpdate,
        updatedAt: new Date(),
      };
      return res.json(memoryStore.projects[projectIdx]);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// DELETE project
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    if (isDbConnected) {
      const deletedProject = await Project.findByIdAndDelete(req.params.id);
      if (!deletedProject)
        return res.status(404).json({ error: "Project not found." });
      return res.json({ message: "Project deleted successfully." });
    } else {
      const projectIdx = memoryStore.projects.findIndex(
        (p) => p._id === req.params.id,
      );
      if (projectIdx === -1)
        return res.status(404).json({ error: "Project not found." });
      memoryStore.projects.splice(projectIdx, 1);
      return res.json({ message: "Project deleted successfully." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
