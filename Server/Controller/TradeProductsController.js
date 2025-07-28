const emailSchema = require('../Models/Email')

const addTradeProducts = async (req,res)=>{

     try {
    
    const {productname,descrption,qualities} = req.body;
    const myProduct = await emailSchema.create({ productname,descrption,qualities });

    res.status(200).json(myProduct);    
  } catch (error) {
     console.log("sup")
  
  }
}
module.exports = {addProduct}