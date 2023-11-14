const mongoose = require('mongoose')

//definir un modelo solo para mongoo

const bootcampSchema = new mongoose.Schema({
    name: {
        type:String,
        unique : true,
        required :[true,"se requiere nombre de bootcamp"], 
        maxlength: [20 , "el nombre solo debe tener 20 caracteres"] 
    } ,
    phone: {
        type:Number,
        required :[true,"se requiere phone de bootcamp"], 
        maxlength: [20 , "el telefono solo debe tener 20 caracteres"] 


    },
    address: {
        type:String,
        required :[true,"direccion requerida"], 
       
    },
    topics: {
        type:[String],
        enum: ["AI",
              "Backend",
             "Frontend",
              "Devops"
    ]


    },
    averageRating : Number,

    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema )
module.exports = Bootcamp