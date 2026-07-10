import { Router } from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import { Message } from '../models/Message.js';
import { authenticateToken } from '../middleware/auth.js';
import { isDbConnected, memoryStore } from '../config/db.js';
const router = Router();
// Transporter configuration
const emailUser = process.env.EMAIL_USER || '';
const emailPass = process.env.EMAIL_PASS || '';
const transporter = emailUser && emailPass ? nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUser,
        pass: emailPass
    }
}) : null;
// POST submit a new message (Public)
router.post('/', [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('email').trim().isEmail().withMessage('Provide a valid email.'),
    body('subject').trim().notEmpty().withMessage('Subject is required.'),
    body('message').trim().notEmpty().withMessage('Message content is required.')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, subject, message } = req.body;
    try {
        let savedMsg;
        if (isDbConnected) {
            savedMsg = await Message.create({ name, email, subject, message });
        }
        else {
            savedMsg = {
                _id: `mem-msg-${Date.now()}`,
                name, email, subject, message,
                isRead: false,
                createdAt: new Date(), updatedAt: new Date()
            };
            memoryStore.messages.push(savedMsg);
        }
        // Email Notification (Catch errors to ensure API request doesn't fail on SMTP issues)
        if (transporter) {
            const mailOptions = {
                from: emailUser,
                to: emailUser, // notify self
                subject: `Portfolio Contact: ${subject} from ${name}`,
                text: `You received a message on your developer portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('SMTP Email Notification failed:', error.message);
                }
                else {
                    console.log('Notification email sent: ' + info.response);
                }
            });
        }
        else {
            console.log('--- Contact Message Received ---');
            console.log(`From: ${name} (${email})`);
            console.log(`Subject: ${subject}`);
            console.log(`Message: ${message}`);
            console.log('--------------------------------');
        }
        return res.status(201).json({ message: 'Message sent successfully!', messageData: savedMsg });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// GET all messages (Protected)
router.get('/', authenticateToken, async (req, res) => {
    try {
        if (isDbConnected) {
            const messages = await Message.find().sort({ createdAt: -1 });
            return res.json(messages);
        }
        else {
            return res.json(memoryStore.messages);
        }
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// PUT mark message as read/unread (Protected)
router.put('/:id', authenticateToken, async (req, res) => {
    const { isRead } = req.body;
    try {
        if (isDbConnected) {
            const updated = await Message.findByIdAndUpdate(req.params.id, { isRead }, { new: true });
            if (!updated)
                return res.status(404).json({ error: 'Message not found.' });
            return res.json(updated);
        }
        else {
            const msgIdx = memoryStore.messages.findIndex(m => m._id === req.params.id);
            if (msgIdx === -1)
                return res.status(404).json({ error: 'Message not found.' });
            memoryStore.messages[msgIdx].isRead = !!isRead;
            return res.json(memoryStore.messages[msgIdx]);
        }
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// DELETE message (Protected)
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        if (isDbConnected) {
            const deleted = await Message.findByIdAndDelete(req.params.id);
            if (!deleted)
                return res.status(404).json({ error: 'Message not found.' });
            return res.json({ message: 'Message deleted successfully.' });
        }
        else {
            const msgIdx = memoryStore.messages.findIndex(m => m._id === req.params.id);
            if (msgIdx === -1)
                return res.status(404).json({ error: 'Message not found.' });
            memoryStore.messages.splice(msgIdx, 1);
            return res.json({ message: 'Message deleted successfully.' });
        }
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
export default router;
