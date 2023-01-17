import express from 'express';
import { getAllTechnologies, getTechnologiesByIds, getTechnologyById } from '../controllers/technologyController.js';


const router = express.Router();

router.get('/all', getAllTechnologies);
router.get('/byid', getTechnologyById);
router.get('/byids', getTechnologiesByIds);

export default router;