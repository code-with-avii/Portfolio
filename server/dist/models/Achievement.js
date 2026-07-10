import mongoose, { Schema } from 'mongoose';
const AchievementSchema = new Schema({
    title: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ['Open Source', 'Hackathons', 'Certifications', 'GitHub Milestones', 'Coding Profile']
    },
    value: { type: String, required: true }, // e.g. "1200+ Rating", "AWS Certified"
    description: { type: String, required: true },
    link: { type: String, default: '' },
    date: { type: String, required: true }
}, { timestamps: true });
export const Achievement = mongoose.model('Achievement', AchievementSchema);
