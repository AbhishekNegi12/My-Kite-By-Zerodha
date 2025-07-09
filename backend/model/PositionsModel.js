const {model} = require("mongoose");

const {PositionsSchema} = require('../schema/PositionsSchema');

//we have to specify name here tat will be the collection name in plural like here holding we have
const PositionsModel = new model('position', PositionsSchema);

module.exports = {PositionsModel};