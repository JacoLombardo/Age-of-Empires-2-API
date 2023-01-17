import Unit from '../models/unitModel.js';

const getAllUnits = async (req, res) => {
    try {
        const allUnits = await Unit.find({}).select('-_id').populate({ path: 'trained_at', select: 'name description image -_id' });
        for (let i = 0; i < allUnits.length; i++){
            delete allUnits[i]._doc.trainedAt;
            if (allUnits[i].attack_bonus.length < 1) {
                delete allUnits[i]._doc.attack_bonus;
            } if (allUnits[i].ability.length < 1) {
                delete allUnits[i]._doc.ability;
            };
        };
        res.status(200).json(allUnits);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching units", error: error });
    };
};

const getUnitById = async (req, res) => {
    let query = req.query;
    try {
        const unitById = await Unit.findOne(query).select('-_id').populate({ path: 'trained_at', select: 'name description image -_id' });
        delete unitById._doc.trainedAt;
        if (unitById.attack_bonus.length < 1) {
            delete unitById._doc.attack_bonus;
        } if (unitById.ability.length < 1) {
            delete unitById._doc.ability;
        };
        res.status(200).json(unitById);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching unit", error: error });
    };
};

const getUnitsByIds = async (req, res) => {
    let query = req.query;
    try {
        const unitsByIds = await Unit.find(query).select('-_id').populate({ path: 'trained_at', select: 'name description image -_id' });
        for (let i = 0; i < unitsByIds.length; i++){
            delete unitsByIds[i]._doc.trainedAt;
            if (unitsByIds[i].attack_bonus.length < 1) {
                delete unitsByIds[i]._doc.attack_bonus;
            } if (unitsByIds[i].ability.length < 1) {
                delete unitsByIds[i]._doc.ability;
            };
        };
        res.status(200).json(unitsByIds);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching units", error: error });
    };
};

export { getAllUnits, getUnitById, getUnitsByIds };