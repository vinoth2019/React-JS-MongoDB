const MongoModel = require("../model/MongoModel");

module.exports.getTask = async (req, res) => {
    const tasks = await MongoModel.find()
    res.send(tasks); 
}

module.exports.saveTask = (req, res) => {
    const {task} = req.body;
    MongoModel.create({task}) //creating task using create() method.
    .then((data) => {
        console.log("Saved Successfully");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something Wrong"});
    })
}

module.exports.updatedTask = (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    MongoModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Updated Successfully"))
    .catch((err) =>{
        console.log(err);
        res.send({error: err, msg: "Something Wrong"});
    })
}

module.exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    MongoModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) =>{
        console.log(err);
        res.send({error: err, msg: "Something Wrong"});
    })
}