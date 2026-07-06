import { Router } from 'express';
import { Achievement } from '../models/Achievement.js';
import { authenticateToken } from '../middleware/auth.js';
import { isDbConnected, memoryStore } from '../config/db.js';

const router = Router();

// GET all achievements
router.get('/', async (req, res) => {
 try {
 if (isDbConnected) {
 const achievements = await Achievement.find().sort({ createdAt: -1 });
 return res.json(achievements);
 } else {
 return res.json(memoryStore.achievements);
 }
 } catch (error) {
 return res.status(500).json({ error: error.message });
 }
});

// POST new achievement
router.post('/', authenticateToken, async (req, res) => {
 const { title, category, value, description, link, date } = req.body;
 if (!title || !category || !value || !description || !date) {
 return res.status(400).json({ error: 'Title, category, value, description, and date are required.' });
 }

 try {
 if (isDbConnected) {
 const newAch = await Achievement.create({ title, category, value, description, link, date });
 return res.status(201).json(newAch);
 } else {
 const newAch = {
 _id: `mem-ach-${Date.now()}`,
 title, category, value, description, link: link || '', date,
 createdAt: new Date(), updatedAt: new Date()
 };
 memoryStore.achievements.push(newAch);
 return res.status(201).json(newAch);
 }
 } catch (error) {
 return res.status(500).json({ error: error.message });
 }
});

// PUT update achievement
router.put('/:id', authenticateToken, async (req, res) => {
 const fields = req.body;
 try {
 if (isDbConnected) {
 const updatedAch = await Achievement.findByIdAndUpdate(req.params.id, fields, { new: true });
 if (!updatedAch) return res.status(404).json({ error: 'Achievement not found.' });
 return res.json(updatedAch);
 } else {
 const achIdx = memoryStore.achievements.findIndex(a => a._id === req.params.id);
 if (achIdx === -1) return res.status(404).json({ error: 'Achievement not found.' });

 memoryStore.achievements[achIdx] = {
 ...memoryStore.achievements[achIdx],
 ...fields,
 updatedAt: new Date()
 };
 return res.json(memoryStore.achievements[achIdx]);
 }
 } catch (error) {
 return res.status(500).json({ error: error.message });
 }
});

// DELETE achievement
router.delete('/:id', authenticateToken, async (req, res) => {
 try {
 if (isDbConnected) {
 const deletedAch = await Achievement.findByIdAndDelete(req.params.id);
 if (!deletedAch) return res.status(404).json({ error: 'Achievement not found.' });
 return res.json({ message: 'Achievement deleted successfully.' });
 } else {
 const achIdx = memoryStore.achievements.findIndex(a => a._id === req.params.id);
 if (achIdx === -1) return res.status(404).json({ error: 'Achievement not found.' });
 memoryStore.achievements.splice(achIdx, 1);
 return res.json({ message: 'Achievement deleted successfully.' });
 }
 } catch (error) {
 return res.status(500).json({ error: error.message });
 }
});

export default router;
