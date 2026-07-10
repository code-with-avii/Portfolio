import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import {
  initialSkills,
  initialProjects,
  initialExperiences,
  initialAchievements,
} from "../data/initialData.js";
import { Skill } from "../models/Skill.js";
import { Project } from "../models/Project.js";
import { Experience } from "../models/Experience.js";
import { Achievement } from "../models/Achievement.js";
import { Admin } from "../models/Admin.js";
export let isDbConnected = false;
// Fallback in-memory stores in case DB is down
export const memoryStore = {
  skills: JSON.parse(JSON.stringify(initialSkills)),
  projects: JSON.parse(JSON.stringify(initialProjects)),
  experiences: JSON.parse(JSON.stringify(initialExperiences)),
  achievements: JSON.parse(JSON.stringify(initialAchievements)),
  messages: [],
  admins: [],
};
// Map memory store IDs for admin/skills/projects/etc
memoryStore.skills.forEach((s, idx) => {
  s._id = `mem-skill-${idx}`;
});
memoryStore.projects.forEach((p, idx) => {
  p._id = `mem-project-${idx}`;
});
memoryStore.experiences.forEach((e, idx) => {
  e._id = `mem-exp-${idx}`;
});
memoryStore.achievements.forEach((a, idx) => {
  a._id = `mem-ach-${idx}`;
});
export const connectDB = async () => {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio";
  try {
    mongoose.set("strictQuery", true);
    // Timeout in 3 seconds so server does not hang indefinitely if DB is not running
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 3000 });
    isDbConnected = true;
    console.log("MongoDB Connected Successfully.");
    // Seed database if empty
    await seedDatabase();
  } catch (error) {
    console.error(`MongoDB Connection Failed: ${error.message}`);
    console.log("API will run in in-memory fallback mode.");
    // Seed in-memory admin
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "adminpassword123";
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(adminPass, salt);
    memoryStore.admins.push({
      _id: "mem-admin-id",
      username: adminUser,
      password: passwordHash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
};
const seedDatabase = async () => {
  try {
    // 1. Seed Admin
    const adminCount = await Admin.countDocuments();
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "adminpassword123";
    if (adminCount === 0) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(adminPass, salt);
      await Admin.create({
        username: adminUser,
        password: passwordHash,
      });
      console.log("Default admin seeded.");
    }
    // 2. Seed Skills
    const skillCount = await Skill.countDocuments();
    if (skillCount === 0) {
      await Skill.insertMany(initialSkills);
      console.log("Default skills seeded.");
    }
    // 3. Seed Projects
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(initialProjects);
      console.log("Default projects seeded.");
    }
    // 4. Seed Experiences
    const expCount = await Experience.countDocuments();
    if (expCount === 0) {
      await Experience.insertMany(initialExperiences);
      console.log("Default experiences seeded.");
    }
    // 5. Seed Achievements
    const achCount = await Achievement.countDocuments();
    if (achCount === 0) {
      await Achievement.insertMany(initialAchievements);
      console.log("Default achievements seeded.");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
