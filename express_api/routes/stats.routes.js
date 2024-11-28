import { getStats, saveStats } from '../controllers/stats.controller.js';
import express from "express"

const router = express.Router();

router.get('/', getStats);
router.post('/', saveStats);

export default router