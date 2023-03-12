import Product from "../models/Product.js";

//add new product in cart
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedProduct,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create.Try again" });
  }
};

//update product cart
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedProduct,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update.Try again" });
  }
};
//delete product
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete.Try again" });
  }
};
//getSingle product
export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id).populate('reviews');
   // console.log("res",id)

    res.status(200).json({
      success: true,
      message: "Successfully Get Single Single",
      data: product,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};
//getAll product
export const getAllProduct = async (req, res) => {
  const page = parseInt(req.query.page);
  // console.log(page)

  try {
    const products = await Product.find({})
      .populate('reviews')
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: products.length,
      message: "Successful  ",
      data: products,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//get product by search
export const getProductBySearch = async (req, res) => {
  //here 'i' means case sensitive
  const product = new RegExp(req.query.product, "i");
  const quantity = parseInt(req.query.quantity);
  const price = parseInt(req.query.price);
  try {
    //gte means greater than equal to
    const products = await Product.find({
        product,
        quantity: { $gte: quantity },
        price: { $gte: price },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "successful",
      date: products,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//get product by search
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true }).populate('reviews').limit(8);

    res.status(200).json({
      success: true,
      message: "successful",
      date: products,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
// get product count

export const getProductCount = async (req, res) => {
  try {
    const productCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: productCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to fetch",
    });
  }
};
