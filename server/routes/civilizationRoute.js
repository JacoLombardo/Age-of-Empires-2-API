import express from 'express';
import { getAllCivilizations } from '../controllers/civilizationController.js';


const router = express.Router();

router.get('/all', getAllCivilizations);

export default router;