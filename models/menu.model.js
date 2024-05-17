const { Timestamp } = require("mongodb");
const mongoose=require("mongoose");


const menu=Mongoose.schema({

},{
    Timestamp: true
});

module.exports={menu};