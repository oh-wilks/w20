const {Schema, model} = require("mongoose");

const productSchema = Schema({
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,

  },
  price: {
    type: Number,
  },
  status: {
    type: String,
  },
  SKU: {

  }
});

module.exports = model("product", productSchema, "products");
