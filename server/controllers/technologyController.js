import Technology from '../models/technologyModel.js';

const getAllTechnologies = async (req, res) => {
    try {
        const allTechnologies = await Technology.find({}).select('-_id').populate({ path: 'researched_at', select: 'name description image -_id' });
        for (let i = 0; i < allTechnologies.length; i++){
            delete allTechnologies[i]._doc.researchedAt;   
        };
        res.status(200).json(allTechnologies);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching technologies", error: error });
    };
};

const getTechnologyById = async (req, res) => {
    let query = req.query;
    try {
        const technologyById = await Technology.findOne(query).select('-_id').populate({ path: 'researched_at', select: 'name description image -_id' });
        delete technologyById._doc.researchedAt;   
        res.status(200).json(technologyById);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching technology", error: error });
    };
};

const getTechnologiesByIds = async (req, res) => {
    let query = req.query;
    try {
        const technologiesByIds = await Technology.find(query).select('-_id').populate({ path: 'researched_at', select: 'name description image -_id' });
        for (let i = 0; i < technologiesByIds.length; i++){
            delete technologiesByIds[i]._doc.researchedAt;   
        };
        res.status(200).json(technologiesByIds);
    } catch (error) {
        console.log('error :>> ', error);
        res.status(500).json({ msg: "Error fetching technologies", error: error });
    };
};

export { getAllTechnologies, getTechnologyById, getTechnologiesByIds };