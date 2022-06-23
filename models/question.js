const mongoose =require('mongoose')

const questionSchema =new mongoose.Schema({
    id:{
        type:Number
    },
    title:{
        type:String
    },
    options:[
        {
            type:Object
        }
    ]
}) 

const Question=mongoose.model('Question',questionSchema)

module.exports =Question