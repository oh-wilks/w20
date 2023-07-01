// desestructura de express
const { Router } = require("express");

//import controladores
const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct, 
} = require("../controllers/products.ctrl")

//instanciar rotuer()
const router = Router();


//crud routes
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)


module.exports = router;