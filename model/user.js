const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    koreanName: {
        type: String,
        maxlength: 20
    },

    englishName: {
        type: String,
        maxlength: 20
    },

    email: {
        type: String,
        trim: true,
        unique: 1
    },

    studentNumber:{
        type: String,
        maxlength: 9
    },

    password:{
        type: String,
        maxlength: 10
    },

    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

const user = mongoose.model('User', userSchema);

module.exports={user};