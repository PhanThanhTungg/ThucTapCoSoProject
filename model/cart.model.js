const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
    { 
        user_id: String,
        products :[
            {
                product_id: String,
                sizeId: String,
                quantity: Number
            }
        ],
        
    },
    {
        timestamps: true
    }
)

const Cart = mongoose.model('Cart'/*ten model */, cartSchema, "carts" /*ten collection*/)

module.exports = Cart