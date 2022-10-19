const mongoose = require('mongoose');

const BrandName=mongoose.Schema({
        brandName:{
                type:'string',
                require:true
        },
        data:{
                type:Date,
                default:Date.now
        }
})

module.exports = mongoose.model('brandName',BrandName)