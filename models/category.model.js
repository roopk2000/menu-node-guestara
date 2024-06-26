const { Timestamp } = require("mongodb");
const mongoose=require("mongoose");
const { subSchema } = require("./sub.model");


const schema= new mongoose.Schema({
    name:{
        type :String,
        required:true
    },
    image :{
        type:String,
        required:true

    },
    description:{
        type: String,
        required:true
    },
    taxApplicability:{
        type : Boolean,
        required:true
    },
    tax:{
        type :Number,
        required: function(){
            return this.taxApplicability;
        }
    },
    taxType:{
        type:String,
        required: function(){
            return this.taxApplicability;
        }
    },
    subCategory: {
        type: [subSchema],
        default: [] // Ensure subCategory is initialized as an empty array
    }

},{
    Timestamp: true
});


const category=mongoose.model('Category', schema);
module.exports={category};


// Name: String
// Image: URL
// Description: String
// Tax Applicability: Boolean
// Tax: Number, if applicable
// Tax type
