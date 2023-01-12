import mongoose from 'mongoose';

const { Schema } = mongoose;
const civilizationSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    expansion: {
        type: String,
        required: true,
        unique: false,
    },
    army_type: {
        type: String,
        required: true,
        unique: false,
    },
    unique_unit: [{
        type: String,
        ref: 'Unit'
    }],
    unique_tech: [{
        type: String,
        ref: 'Technology'
    }],
    team_bonus: [{
        type: String,
        required: false,
        unique: false,
    }],
    civilization_bonus: [{
        type: String,
        required: false,
        unique: false,
    }],
    banner: {
        type: String,
        required: true,
        unique: true,
    }
});
const Civilization = mongoose.model('Civilization', civilizationSchema);
export default Civilization