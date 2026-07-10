import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.js";
import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import experienceRouter from "./routes/experience.js";
import achievementsRouter from "./routes/achievements.js";
import messagesRouter from "./routes/messages.js";
import uploadRouter from "./routes/upload.js";

const app = express();
const port = process.env.PORT || 3000;

// Resolve ES Modules dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security Middlewares
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);

// CORS Configuration
app.use(
  cors({
    origin:[
      process.env.CLIENT_URL,
      "http://localhost:5173",
      "https://portfolio-cl81.onrender.com"
   ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Request Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global Rate Limiting
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150, // Limit each IP to 150 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many requests from this IP, please try again after 15 minutes.",
  },
});
app.use(globalLimiter);

// Specific rate limit for contact form submissions (max 5 submissions per hour per IP)
const messageLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error:
      "Too many message submissions. Please wait an hour before trying again.",
  },
});
app.use("/api/messages", messageLimiter);

// Serve uploads statically
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/achievements", achievementsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/upload", uploadRouter);

// Health Check
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found." });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

// Initialize and Listen
const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(
      `Server is running in ${process.env.port || "development"} mode on port ${port}`,
    );
  });
};

startServer();
