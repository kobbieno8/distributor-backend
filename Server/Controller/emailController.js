const emailSchema = require('../Models/Email')

const addEmail = async (req,res)=>{

     try {
    
    const { email } = req.body;
    const aEmail = await emailSchema.create({ email });

    res.status(200).json(aEmail);    
  } catch (error) {
     console.log("sup")
  
  }
}
module.exports = {addEmail}