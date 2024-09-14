import mongoose from 'mongoose'

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        max: 16,
        unique: true,
        required: true
    },
    durationStart: {
        type: Date,
        required: true
    },
    durationEnd: {
        type: Date,
        required: true
    }
})

export const Trainer = mongoose.model('Trainer', trainerSchema)