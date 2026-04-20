import express from 'express';
import { summarizeComplaint } from '../Controllers/aiController.js';
import { verifyUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// Both residents and admins might want to use this, so verifyUser is enough.
router.post('/summarize', verifyUser, summarizeComplaint);

export default router;
