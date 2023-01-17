import mongoose from 'mongoose';

const { Schema } = mongoose;
const civilizationSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    number_id: {
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
        unique: false
    },
    uniqueUnit: [{
        type: String,
        required: false,
        unique: false
    }],
    uniqueTech: [{
        type: String,
        required: false,
        unique: false
    }],
    uniqueBuilding: [{
        type: String,
        required: false,
        unique: false
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
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
civilizationSchema.virtual('unique_unit', {
    ref: 'Unit',
    localField: 'uniqueUnit',
    foreignField: 'id'
});
civilizationSchema.virtual('unique_tech', {
    ref: 'Technology',
    localField: 'uniqueTech',
    foreignField: 'id'
});
civilizationSchema.virtual('unique_building', {
    ref: 'Building',
    localField: 'uniqueBuilding',
    foreignField: 'id'
});

const Civilization = mongoose.model('Civilization', civilizationSchema);
export default Civilization