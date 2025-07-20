const emailModel = require('../Models/Email')
const addEmail = async (req,res)=>{
     try {
    const { email } = req.body;
    const aEmail = await emailModel.create({ email });
    res.status(200).json(aEmail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = {addEmail}