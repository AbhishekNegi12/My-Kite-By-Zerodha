const {model} = require("mongoose");

const {HoldingsSchema} = require('../schema/HoldingsSchema');

//we have to specify name here tat will be the collection name in plural like here holding we have
const HoldingsModel = new model('holding', HoldingsSchema);

module.exports = {HoldingsModel};