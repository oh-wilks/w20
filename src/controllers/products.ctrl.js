const Product = require("../models/product")


// crear controladores CRUD
const  getProducts = async (req, res) => {

    const products = await Product.find()

    return res.json({
        ok: true,
        msg: "Returned Products",
        data: products,
    });
};

// create 1 product 
const createProduct = async (req, res) => {

    const {productName, productDesctiption, price, status, SKU} = req.body;

    const new_product = {
        productName,
        productDesctiption,
        price,
        status,
        SKU,
    };

   const new_createdProduct = await Product(new_product).save()

    return res.json({
        ok: true, 
        msg: "Product Created",
        data: new_product,
    });
};


// update 1 product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {productName, productDesctiption, price, status, SKU} = req.body;
  
    const new_product = {
        productName,
        productDesctiption,
        price,
        status,
        SKU,
    };
  
    try {
      const updated_product = await Product.findByIdAndUpdate(id, new_product, { new: true });
  
      return res.json({
        ok: true,
        msg: "Product updated",
        data: updated_product,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        msg: "Failed to update product",
        error: error.message,
      });
    }
  };


// delete 1 product
const deleteProduct = async (req, res) => {

    const { id } = req.params;
  
    try {
      const deleted_product = await Product.findByIdAndDelete(id);
  
      if (!deleted_product) {
        return res.status(404).json({
          ok: false,
          msg: "Product not found",
        });
      }
  
      return res.json({
        ok: true,
        msg: "Product deleted",
        data: deleted_product,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        msg: "Failed to delete product",
        error: error.message,
      });
    }
  };

//export controllers

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}