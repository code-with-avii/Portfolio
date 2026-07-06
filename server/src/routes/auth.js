import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin.js';
import { isDbConnected, memoryStore } from '../config/db.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretportfoliojsonwebtokenkey12345';

router.post('/login', async (req, res) => {
 const { username, password } = req.body;

 if (!username || !password) {
 return res.status(400).json({ error: 'Username and password are required.' });
 }

 try {
 let adminUser;

 if (isDbConnected) {
 adminUser = await Admin.findOne({ username });
 } else {
 adminUser = memoryStore.admins.find(a => a.username === username);
 }

 if (!adminUser) {
 return res.status(401).json({ error: 'Invalid credentials.' });
 }

 const isMatch = await bcrypt.compare(password, adminUser.password);
 if (!isMatch) {
 return res.status(401).json({ error: 'Invalid credentials.' });
 }

 const token = jwt.sign(
 { id: adminUser._id, username: adminUser.username },
 JWT_SECRET,
 { expiresIn: '7d' }
 );

 return res.json({ token, user: { username: adminUser.username } });
 } catch (error) {
 return res.status(500).json({ error: error.message });
 }
});

router.get('/status', async (req, res) => {
 const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1];

 if (!token) {
 return res.status(401).json({ isAuthenticated: false });
 }

 try {
 jwt.verify(token, JWT_SECRET);
 return res.json({ isAuthenticated: true });
 } catch (err) {
 return res.status(401).json({ isAuthenticated: false });
 }
});

export default router;
