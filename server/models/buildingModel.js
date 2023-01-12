import mongoose from 'mongoose';

const { Schema } = mongoose;
const buildingSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    expansion: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    type: {
        type: String,
        required: true,
        unique: false
    },
    age: {
        type: String,
        required: true,
        unique: false
    },
    use: [{
        type: String,
        required: false,
        unique: false
    }],
    cost: {
        type: Object,
        required: true,
        unique: false
    },
    build_time: {
        type: Number,
        required: true,
        unique: false
    },
    hit_points: {
        type: Number,
        required: false,
        unique: false
    },
    pierce_attack: {
        type: Number,
        required: false,
        unique: false
    },
    attack_bonus: [{
        type: String,
        required: false,
        unique: false
    }],
    rate_of_fire: {
        type: Number,
        required: false,
        unique: false
    },
    range: {
        type: Number,
        required: false,
        unique: false
    },
    accuracy: {
        type: String,
        required: false,
        unique: false
    },
    projectile_speed: {
        type: Number,
        required: false,
        unique: false
    },
    melee_armor: {
        type: Number,
        required: false,
        unique: false
    },
    pierce_armor: {
        type: Number,
        required: false,
        unique: false
    },
    line_of_sight: {
        type: Number,
        required: true,
        unique: false
    },
    ability: [{
        type: String,
        required: false,
        unique: false
    }],
    image: {
        type: String,
        required: true,
        unique: false
    }
});
const Building = mongoose.model('Building', buildingSchema);
export default Building