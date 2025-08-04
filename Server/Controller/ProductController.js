const productSchema = require("../Models/Products");

const getproduct = async (req, res) => {
  try {
    const products = await productSchema.find({}).sort({ createdAt: -1 });
    if (!products) {
      
      console.log("here");
      return res.status(404).json({ message: "No products found" });
    } else res.status(200).json({ products: products });
  } catch (error) {
    const products = [
    {
      id:"1",
      name: "Yirgacheffe Premium",
      origin: "Yirgacheffe Region",
      profile: "Floral, Citrus, Wine-like",
      processing: "Washed",
      altitude: "1,700-2,200m",
      grade: "Grade 1",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      price: "Premium Export Quality",
      description: "Renowned for its bright acidity and complex floral notes, our Yirgacheffe coffee represents the pinnacle of Ethiopian coffee excellence."
    },
    {
      
      id:"2",
      name: "Sidamo Excellence",
      origin: "Sidamo Region",
      profile: "Chocolate, Berry, Spice",
      processing: "Natural",
      altitude: "1,400-2,200m",
      grade: "Grade 1",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
      price: "Premium Export Quality",
      description: "Full-bodied with rich chocolate undertones and berry notes, Sidamo coffee offers a complex and satisfying cup."
    },
    {
      
      id:"3",
      name: "Harrar Heritage",
      origin: "Harrar Region",
      profile: "Wine, Blueberry, Earthy",
      processing: "Natural",
      altitude: "1,500-2,100m",
      grade: "Grade 1",
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
      price: "Premium Export Quality",
      description: "One of the world's oldest coffee varieties, Harrar offers distinctive wine-like characteristics and fruity complexity."
    },
    {
      
      id:"4",
      name: "Limu Classic",
      origin: "Limu Region",
      profile: "Balanced, Sweet, Mild",
      processing: "Washed",
      altitude: "1,400-1,800m",
      grade: "Grade 2",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg",
      price: "Export Quality",
      description: "Well-balanced with mild acidity and sweet undertones, perfect for those seeking a smooth, approachable Ethiopian coffee."
    }
  ];
  res.status(200).json({ products: products });
  
    console.log("waht product!");
  }
};

const addProduct = async (req, res) => {
  try {
    const { productname, descrption, altitude, flavor, grade, image } =
      req.body;
    const myProduct = await productSchema.create({
      productname,
      descrption,
      altitude,
      flavor,
      grade,
      image,
    });

    res.status(200).json(myProduct);
  } catch (error) {
    console.log("sup");
    console.log(error);
  }
};
module.exports = { addProduct, getproduct };
