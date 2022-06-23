const mongoose =require('mongoose')

const optionsSchema =new mongoose.Schema({
    id:{
        type:Number
    },
    text:{
        type:String
    },
    votes:{
        type:Number
    },
    link_to_vote:{
        type:String
    }
}) 

const Option=mongoose.model('Option',optionsSchema)

module.exports =Option