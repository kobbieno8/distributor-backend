const express = require('express')
const {addEmail} = require('../Controller/emailController')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json(
    { "lang": [{t1: "roman",t2:"roman"},{t1:"redman",t2:"redman"}]}
    )
    
})
router.post('/', addEmail); 

module.exports = router