const mongoose = require('mongoose'),
    bcryptjs = require('bcryptjs')

const _user = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a email'],
        lowercase: true,
        unique: [true, 'Email is not unique'],
        match: [/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/],
    },
    password: {
        type: String,
        minlength: [8, 'Too short, min is 8 characters'],
        maxlength: [32, 'Too long, max is 32 characters'],
        required: [true, 'Password is required'],
    },
    roles: {
        type: [],
        default: ['u'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'deleted'],
        default: 'active',
    },
})

_user.pre('save', function (next) {
    const user = this

    if (!user.isModified('password')) {
        next()
    }

    bcryptjs.genSalt(10, function (err, salt) {
        if (err) {
            return next(err)
        }

        bcryptjs.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err)
            }

            user.password = hash
            next()
        })
    })
})

_user.methods.comparePassword = function (candidatePassword, callback) {
    bcryptjs.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err)
        }

        callback(null, isMatch)
    })
}



const _hackathon = new mongoose.Schema({
})





module.exports = {
    user: mongoose.model("user", _user),
    hackathon: mongoose.model("hackathon", _hackathon),
}
