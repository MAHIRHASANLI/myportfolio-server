const ProjectModel = require("../model/project.model");

const ProjectController = {
    GetAll: async (req, res) => {
        const GetAllAbout = await ProjectModel.find();
        res.status(200).send(GetAllAbout);
    },
    Post: async (req, res) => {
        const NewObject = new ProjectModel({
            name: req.body.name,
            title: req.body.title,
            image: req.body.image,
            webkitURL: req.body.webkitURL
        })
        const newobj = await NewObject.save()
        res.status(200).send(newobj)
    },
    Put: async (req, res) => {
        const PutObject = {
            name: req.body.name,
            title: req.body.title,
            image: req.body.image,
            webkitURL: req.body.webkitURL
        };
        await ProjectModel.findByIdAndUpdate(req.params.id, PutObject);
        res.status(200).send(PutObject);
    },
    Delet: async (req, res) => {
        const deleteObj = await ProjectModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteObj)
    }
}

module.exports = ProjectController;