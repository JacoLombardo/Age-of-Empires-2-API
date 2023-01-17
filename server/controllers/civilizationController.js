import Civilization from '../models/civilizationModel.js';

const getAllCivilizations = async (req, res) => {
    try {
        const allCivilizations = await Civilization.find({}).select('-_id').populate({ path: 'unique_unit', select: 'name description image -_id' }).populate({ path: 'unique_tech', select: 'name type image -_id' }).populate({ path: 'unique_building', select: 'name description image -_id' });
        for (let i = 0; i < allCivilizations.length; i++){
            delete allCivilizations[i]._doc.uniqueUnit;
            delete allCivilizations[i]._doc.uniqueTech;
            if (allCivilizations[i]._doc.uniqueBuilding) {
                delete allCivilizations[i]._doc.uniqueBuilding;
            };
        };
        res.status(200).json(allCivilizations);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching civilizations", error: error });
    };
};

const getCivilizationById = async (req, res) => {
    let query = req.query;
    try {
        const civilizationById = await Civilization.findOne(query).select('-_id').populate({ path: 'unique_unit', select: 'name description image -_id' }).populate({ path: 'unique_tech', select: 'name type image -_id' }).populate({ path: 'unique_building', select: 'name description image -_id' });
        delete civilizationById._doc.uniqueUnit;
        delete civilizationById._doc.uniqueTech;
        if (civilizationById._doc.uniqueBuilding) {
            delete civilizationById._doc.uniqueBuilding;
        };
        res.status(200).json(civilizationById);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching civilization", error: error });
    };
};

const getCivilizationsByIds = async (req, res) => {
    let query = req.query;
    try {
        const civilizationsByIds = await Civilization.find(query).select('-_id').populate({ path: 'unique_unit', select: 'name description image -_id' }).populate({ path: 'unique_tech', select: 'name type image -_id' }).populate({ path: 'unique_building', select: 'name description image -_id' });
        for (let i = 0; i < civilizationsByIds.length; i++){
            delete civilizationsByIds[i]._doc.uniqueUnit;
            delete civilizationsByIds[i]._doc.uniqueTech;
            if (civilizationsByIds[i]._doc.uniqueBuilding) {
                delete civilizationsByIds[i]._doc.uniqueBuilding;
            };
        };
        res.status(200).json(civilizationsByIds);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching civilizations", error: error });
    };
};

export { getAllCivilizations, getCivilizationById, getCivilizationsByIds };