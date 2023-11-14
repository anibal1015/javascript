const mongoose = require('mongoose')
//funcion de conexion 

const conectarDB = async() =>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('mongoDB conectado...'.bgBlue.red)

}

module.exports=conectarDB