import {Schema, model} from 'mongoose';

const companySchema = new Schema({
    denomination: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    bussinesHours: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    latitude: {
        type: Number,
        trim: true
    },
    longitude: {
        type: Number,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
});

export default model('Company', companySchema);