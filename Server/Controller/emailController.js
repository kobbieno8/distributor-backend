const emailSchema = require('../Models/Email')

const addEmail = async (req,res)=>{

     try {
    
    const { email } = req.body;
    const aEmail = await emailSchema.create({ email });
    console.log("here"+aEmail)
    console.log("here1"+email)
    res.status(200).json(aEmail);    
  } catch (error) {
     console.log("sup")
  
  }
}
module.exports = {addEmail}