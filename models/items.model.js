const mongoose=require("mongoose");

const items= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    taxApplicability:{
        type:Boolean,
        default:this.taxApplicability
    },
    tax:{
        type:Number,
        default:this.tax
    },
    baseAmount:{
        type: Number,
    required:true
    },
    discount:{
        type:Number,
        required:true
    }
},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

// items.virtual('totalAmount').get(function (){
//     return this.baseAmount-this.discount;
// });



module.exports={
items
};



















// Name: String
// Image: URL
// Description: String
// Tax Applicability: Boolean
// Tax: Number, if applicable
// Base Amount: Number
// Discount: Number
// Total Amount: Number (Base - Discount)
