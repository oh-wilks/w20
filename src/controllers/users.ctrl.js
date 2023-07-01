// crear controlador CRUD
const  getUsers = (req, res) => {
    return res.json({
        ok: true,
        msg: "Usuarios obtenidos",
        data: [],
    });
};

// create 1 user 
const createUser = (req, res) => {
    return res.json({
        ok: true, 
        msg: "Usuario creado",
        data: {},
    });
};

// update 1 user
const updateUser = (req, res) => {
    return res.json({
        ok: true,
        msg: "Usuario actualizado",
        data: {},
    });
};

// delete 1 user
const deleteUsuer = (req, res) => {
    return res.json({
        ok: true,
        msg: "Usuario eliminado",
        data: {},
    });
};
// export controllers
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUsuer,
};