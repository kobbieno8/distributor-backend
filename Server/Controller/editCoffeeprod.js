const editProduct = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
console.log(updateData)
  try {
    const result = await User.findByIdAndUpdate(id, updateData, { new: true });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
};
module.exports = {editProduct}