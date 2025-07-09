//getting schema class
const { Schema} = require("mongoose");

//naming schema and creating a new one
//we can have multiple schema in one file

//the requirement of this schema is whenever we are inserting something on database or reading something from Db that will be compared against these parameters list to amke sure we have all the values
const HoldingsSchema = new Schema({ 
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingsSchema };


