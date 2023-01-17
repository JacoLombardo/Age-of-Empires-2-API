import express from 'express';
import { getAllBuildings, getBuildingById, getBuildingsByIds } from '../controllers/buildingController.js';


const router = express.Router();

router.get('/all', getAllBuildings);
router.get('/byid', getBuildingById);
router.get('/byids', getBuildingsByIds);

export default router;