import mongoose, { Schema } from 'mongoose';

const ExperienceSchema = new Schema({
 role: { type: String, required: true },
 company: { type: String, required: true },
 duration: { type: String, required: true },
 type: { 
 type: String, 
 required: true,
 enum: ['College Projects', 'Team Projects', 'Freelance Work', 'Open Source Contributions', 'Professional Experience'] 
 },
 technologies: [{ type: String }],
 achievements: [{ type: String }]
}, { timestamps: true });

export const Experience = mongoose.model('Experience', ExperienceSchema);
