const mongoose = require('mongoose');
const { Schema } = mongoose ;

const users = new Schema({
    name : { type : string, require: true },
    phonenumber : string,
    password : string,
    confrirmPassword : string
})
