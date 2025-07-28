const express = require('express')
const {addEmail} = require('../Controller/emailController')
const {mailer} = require('../Nodemailer_folder/Nodemailer')
const router = express.Router()

router.post('/e',addEmail);

router.post('/send-email', async (req, res, next) => {
  try {
    await mailer(req, res);
  } catch (err) {
    next(err);
  }
});

router.get('/',(req,res)=>{
    res.json(
    { "lang": [{t1: "roman",t2:"roman"},{t1:"redman",t2:"redman"}]}
    )
    
})


module.exports = router