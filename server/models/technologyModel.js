import mongoose from 'mongoose';

const { Schema } = mongoose;
const technologySchema = new Schema({
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
    civilizatioN: {
        type: String,
        required: false,
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
    researchedAt: [{
        type: String,
        required: true,
        unique: false
    }],
    cost: {
        type: Object,
        required: true,
        unique: false
    },
    research_time: {
        type: Number,
        required: true,
        unique: false
    },
    effect: [{
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
technologySchema.virtual('researched_at', {
    ref: 'Building',
    localField: 'researchedAt',
    foreignField: 'id'
});
const Technology = mongoose.model('Technology', technologySchema);
export default Technology