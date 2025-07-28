const emailSchema = require('../Models/Email')

const addProduct = async (req,res)=>{

     try {
    
    const {productname,descrption,altitude,flavor,grade,image} = req.body;
    const myProduct = await emailSchema.create({productname,descrption,altitude,flavor,grade,image});

    res.status(200).json(myProduct);    
  } catch (error) {
     console.log("sup")
  
  }
}
module.exports = {addProduct}