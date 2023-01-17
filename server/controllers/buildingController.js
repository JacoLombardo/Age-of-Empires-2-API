import Building from '../models/buildingModel.js';

const getAllBuildings = async (req, res) => {
    try {
        const allBuildings = await Building.find({}).select('-_id');
        for (let i = 0; i < allBuildings.length; i++){
            if (allBuildings[i].special_ability.length < 1) {
                delete allBuildings[i]._doc.special_ability;   
            } if (allBuildings[i].attack_bonus.length < 1) {
                delete allBuildings[i]._doc.attack_bonus;   
            }; 
        };
        res.status(200).json(allBuildings);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching buildings", error: error });
    };
};

const getBuildingById = async (req, res) => {
    let query = req.query;
    try {
        const buildingById = await Building.findOne(query).select('-_id');
        if (buildingById.special_ability.length < 1) {
            delete buildingById._doc.special_ability;   
        } if (buildingById.attack_bonus.length < 1) {
            delete buildingById._doc.attack_bonus;   
        }; 
        res.status(200).json(buildingById);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching building", error: error });
    };
};

const getBuildingsByIds = async (req, res) => {
    let query = req.query;
    try {
        const buildingsByIds = await Building.find(query).select('-_id');
        for (let i = 0; i < buildingsByIds.length; i++){
            if (buildingsByIds[i].special_ability.length < 1) {
                delete buildingsByIds[i]._doc.special_ability;   
            } if (buildingsByIds[i].attack_bonus.length < 1) {
                delete buildingsByIds[i]._doc.attack_bonus;   
            }; 
        };
        res.status(200).json(buildingsByIds);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching buildings", error: error });
    };
};

export { getAllBuildings, getBuildingById, getBuildingsByIds };