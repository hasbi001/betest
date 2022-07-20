var mongoose = require('mongoose');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        id: String,
        userName: String,
        accuntNumber: Integer,
        emailNumber: String,
        identityNumber: Integer
    })
);
module.exports = User;