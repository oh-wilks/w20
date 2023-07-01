// desestructura de express
const { Router } = require("express");

//import controladores
const {
    getUsers,
    createUser,
    updateUser,
    deleteUsuer,
} = require("../controllers/users.ctrl")

//instanciar rotuer()
const router = Router();


//crud routes
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser)
router.delete("/:id", deleteUsuer)



module.exports = router;