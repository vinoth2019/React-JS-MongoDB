const {Router} = require("express");

const router = Router();
const { 
    getTask, 
    saveTask, 
    updatedTask, 
    deleteTask
 } = require("../controller/MongoController");
 //CRUD Operation request
router.get("/get", getTask);
router.post("/save", saveTask);
router.put("/update/:id", updatedTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;