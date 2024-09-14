import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        unique: true,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    membershipStart: {
        type: Date,
        default: Date.now
    },
    membershipEnd: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'active',
        enum: ['active', 'inactive']
    },
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
    }
})

export const Member = mongoose.model('Member', memberSchema)