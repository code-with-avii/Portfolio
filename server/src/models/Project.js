import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
 title: { type: String, required: true },
 subtitle: { type: String, required: true },
 description: { type: String, required: true },
 longDescription: { type: String, required: true },
 image: { type: String, required: true },
 tags: [{ type: String }],
 features: [{ type: String }],
 architectureDiagram: { type: String, default: '' },
 apiFlow: [{ type: String }],
 databaseDesign: { type: String, default: '' },
 challengesSolved: { type: String, default: '' },
 performanceOptimizations: { type: String, default: '' },
 futureImprovements: [{ type: String }],
 githubUrl: { type: String, default: '' },
 liveUrl: { type: String, default: '' },
 featured: { type: Boolean, default: false },
 role: { type: String, default: 'Lead Developer' },
 duration: { type: String, default: '2026' }
}, { timestamps: true });

export const Project = mongoose.model('Project', ProjectSchema);
