import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    mobile: {type: Number, required: true, unique: true},
    country: {type: String, required: false},
    city: {type: String, required: false},
    zip: {type: String, required: false},
    address: {type: String, required: false},
    userDeposit: {type: Number, required: false},
    userProfit: {type: Number, required: false},
    withdrawAmount: {type: Number, required: false},
    paidAmount: {type: Number, required: false},
    bitcoinWallet: {type: String, required: false},
    withdrawStatus: {type: String, required: false},
    pendingRequest: {type: Number, required: false},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false, required: false},
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;