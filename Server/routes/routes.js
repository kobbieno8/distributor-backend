const express = require('express')
const {addEmail} = require('../Controller/emailController')

const router = express.Router()
router.post('/e',addEmail); 

router.get('/',(req,res)=>{
    res.json(
    { "lang": [{t1: "roman",t2:"roman"},{t1:"redman",t2:"redman"}]}
    )
    
})


module.exports = router