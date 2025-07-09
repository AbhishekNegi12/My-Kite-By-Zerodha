const {Schema} = require("mongoose");
const { OrdersModel } = require("../model/OrdersModel");

const OrdersSchema = new Schema({
    name : String, // should be String, not Number
    qty : Number,
    price: Number, // add price field for order
    mode: String, // buy or sell
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});


module.exports = {OrdersSchema};