const emailSchema = require('../Models/Email')

const addUser = async (req,res)=>{

     try {
    
    const {username,password} = req.body;
    const myuser = await emailSchema.create({ username,password });

    res.status(200).json(myProduct);    
  } catch (error) {
     console.log("sup")
  
  }
}
module.exports = {myuser}