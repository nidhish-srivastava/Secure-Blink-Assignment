import express from "express"
import { getInsights, saveInsights } from '../controllers/insights.controller.js'

const router = express.Router();

router.get('/', getInsights);
router.post('/', saveInsights);

export default router