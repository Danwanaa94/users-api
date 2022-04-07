const {Router} =require("express")

const {getUsers} =require("../controllers/usersController")
const {createUser} = require("../controllers/usersController")
const {getUser} = require("../controllers/usersController")

const router =Router();
router.route("/users").get(getUsers).post(createUser)
router.get("/users/:id",getUser)




module.exports=router