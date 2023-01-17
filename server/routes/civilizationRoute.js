import express from 'express';
import { getAllCivilizations, getCivilizationById, getCivilizationsByIds } from '../controllers/civilizationController.js';


const router = express.Router();

router.get('/all', getAllCivilizations);
router.get('/byid', getCivilizationById);
router.get('/byids', getCivilizationsByIds);

export default router;