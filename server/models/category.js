const mongoose = require("mongoose")
const sch = new mongoose.Schema({
    name:{type:String},
    desc:{type: String},
    parent:{type: mongoose.SchemaTypes.ObjectId,ref:'category'}
})
module.exports = mongoose.model('category',sch)
