import express from 'express';
import { getAllUnits, getUnitById, getUnitsByIds } from '../controllers/unitController.js';


const router = express.Router();

router.get('/all', getAllUnits);
router.get('/byid', getUnitById);
router.get('/byids', getUnitsByIds);

export default router;