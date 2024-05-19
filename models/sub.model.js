const mongoose=require("mongoose");
const {items}=require("./items.model");
const subSchema= new mongoose.Schema({
    name :{
        type :String,
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
        default:false
    },
    tax:{
        type:Number,
        default:0
    },
    items:{
        type:[items],
        default:[]
    }

},{
    timestamps:true
});

module.exports={
    subSchema
};

// Name: String
// Image: URL
// Description: String
// Tax Applicability: Boolean, Default: Category tax applicability 
// Tax: Number, Default: Category tax number
