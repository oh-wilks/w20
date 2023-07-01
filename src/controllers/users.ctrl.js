const Dog = require("../models/user")


// crear controladores CRUD
const  getUsers = async (req, res) => {

    const dogs = await Dog.find()

    return res.json({
        ok: true,
        msg: "Usuarios obtenidos",
        data: dogs,
    });
};

// create 1 user 
const createUser = async (req, res) => {

    const {dogName, age, breed, vaccines} = req.body;

    const new_dog = {
        dogName,
        age,
        breed,
        vaccines,
    };

   const new_doggy = await Dog(new_dog).save()

    return res.json({
        ok: true, 
        msg: "Usuario creado",
        data: {},
    });
};

// update 1 user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { dogName, age, breed, vaccines } = req.body;
  
    const new_dog = {
      dogName,
      age,
      breed,
      vaccines,
    };
  
    try {
      const updated_dog = await Dog.findByIdAndUpdate(id, new_dog, { new: true });
  
      return res.json({
        ok: true,
        msg: "Dog updated",
        data: updated_dog,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        msg: "Failed to update dog",
        error: error.message,
      });
    }
  };
  

// delete 1 user
const deleteUsuer = async (req, res) => {

        const { id } = req.params;
      
        try {
          const deleted_dog = await Dog.findByIdAndDelete(id);
      
          if (!deleted_dog) {
            return res.status(404).json({
              ok: false,
              msg: "Dog not found",
            });
          }
      
          return res.json({
            ok: true,
            msg: "Dog deleted",
            data: deleted_dog,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({
            ok: false,
            msg: "Failed to delete dog",
            error: error.message,
          });
        }
      };
      
// export controllers
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUsuer,
};