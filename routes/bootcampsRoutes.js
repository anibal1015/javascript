const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const router = express.Router()

 router.get('/',async (req,res)=>{
    //traigo todos los bootcamps
    const  bootcamps = await BootcampModel.find()
    res.json({
        success:true,
       data: bootcamps
    })
})

router.get('/:id', async (req,res)=>{
    //traer bootcamp por id
    const bootcamp = await BootcampModel.findById(req.params.id)
    res.json({
        success:true,
        data: bootcamp 
    })
})
router.put ('/:id',function (req,res){
    res.json({
        success:true,
        msg: `aqui se editara un bootcamp`
    })
})
router.post ('/', async(req,res)=>{
    //registrar nuevo bootcamp 
    const newBootcamp = await BootcampModel.create(req.body)
    res.json({
        success:true,
        data: newBootcamp

    })
})

router.delete ('/:id', async(req,res)=>{

    //eliminar bootcamp 
    const bootcampdelete = await BootcampModel.findOneAndDelete(req.params.id)
    res.json({
        success:true,
        data:bootcampdelete
    })
})

module.exports = router