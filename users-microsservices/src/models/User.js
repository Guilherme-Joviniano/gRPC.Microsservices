const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    id: Number,
    email: String,
    username: String,
    password: String,
});

 // before save
userSchema.pre('save', async function (next) {
    if(! this.isModified('password')) next();
    
    this.password = await bcrypt.hash(this.password, 8) 
})

// implement methods

userSchema.methods = {
    compareHash(hash) {
        return bcrypt.compare(hash, this.password)
    }   
}

userSchema.statics = {
    generateToken(id) {
        return jwt.sign({ id }, 'Jovinano codes', {
            expiresIn: 86400,
        })
    }
}

module.exports = mongoose.model('User', userSchema);
