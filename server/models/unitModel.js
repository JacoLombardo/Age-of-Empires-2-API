import mongoose from 'mongoose';

const { Schema } = mongoose;
const unitSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    number_id: {
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
    trainedAt: [{
        type: String,
        required: false,
        unique: false,
        ref: 'Building'
    }],
    cost: {
        type: Object,
        required: true,
        unique: false
    },
    training_time: {
        type: Number,
        required: true,
        unique: false
    },
    hit_points: {
        type: Number,
        required: false,
        unique: false
    },
    melee_attack: {
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
    frame_delay: {
        type: Number,
        required: false,
        unique: false
    },
    attack_delay: {
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
    armor_class: {
        type: String,
        required: false,
        unique: false
    },
    garrison: {
        type: Number,
        required: false,
        unique: false
    },
    movement_rate: {
        type: Number,
        required: true,
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
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
unitSchema.virtual('trained_at', {
    ref: 'Building',
    localField: 'trainedAt',
    foreignField: 'id'
});
const Unit = mongoose.model('Unit', unitSchema);
export default Unit