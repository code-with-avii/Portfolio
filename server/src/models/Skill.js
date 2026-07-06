import mongoose, { Schema } from "mongoose";

const SkillSchema = new Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Databases", "Tools", "AI"],
    },
    icon: { type: String, required: true }, // lucide icon name or emoji
    currentlyLearning: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Skill = mongoose.model("Skill", SkillSchema);
