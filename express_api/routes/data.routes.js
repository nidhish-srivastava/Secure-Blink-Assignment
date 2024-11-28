import express from "express"
import { getData, saveData } from '../controllers/data.controller.js';

const router = express.Router();

router.get('/', getData);
router.post('/', saveData);

export default router