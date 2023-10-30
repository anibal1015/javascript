const mongoose = require('mongoose')

//definir un modelo solo para mongoo

const bootcampSchema = new mongoose.Schema({
    name: {
        type:String,
        unique : true,
        required :[true,"el bootcamp ya esta repetido"], 
        maxlength: [20 , "el nombre solo debe tener 20 caracteres"] 
    } ,
    phone: {
        type:Number,
        required :[true,"el bootcamp ya esta repetido"], 
        maxlength: [20 , "el telefono solo debe tener 10 caracteres"] 


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
        required: [true, "debe ingresarse fechade creacion "]
    }
})

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema )
module.exports = Bootcamp