import Civilization from '../models/civilizationModel.js';
import Unit from '../models/unitModel.js';

const getAllCivilizations = async (req, res) => {
    try {
        const allCivilizations = await Civilization.find({}).populate({path: 'unique_unit'});
        res.json(allCivilizations);
    } catch (error) {
        console.log('error :>> ', error);
    }
};

export { getAllCivilizations };